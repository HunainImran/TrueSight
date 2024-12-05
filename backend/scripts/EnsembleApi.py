from flask import Flask, request, jsonify
from flask_cors import CORS
from URLClassifierRunner import ClassifyUrl
from BERTRunner import ClassifyText
import numpy as np
from scipy.special import softmax
import re

app = Flask(__name__)
CORS(app)

def ExtractURLs(email_text):
    """Extract URLs from email text."""
    url_pattern = r'(http[s]?://\S+|www\.\S+)'
    return re.findall(url_pattern, email_text)

def determine_weights(has_text, has_url):
    """Determine weights dynamically based on text and URL presence."""
    if has_text and has_url:
        return 0.7, 0.3  # Default weights when both are available
    elif has_text and not has_url:
        return 1.0, 0.0  # All weight to BERT if no URL
    elif not has_text and has_url:
        return 0.0, 1.0  # All weight to XGBoost if no text
    else:
        raise ValueError("Both text and URL are missing.")  # Shouldn't happen given the checks

def ensemble_prediction(text):
    """Perform ensemble prediction using BERT and XGBoost models."""
    urls = ExtractURLs(text)  # Extract URLs from the text
    has_text = bool(re.sub(r'(http[s]?://\S+|www\.\S+)', '', text).strip())
    has_url = len(urls) > 0

    # Determine weights dynamically
    bert_weight, xgb_weight = determine_weights(has_text, has_url)

    # Initialize probabilities
    bert_probs = np.array([0.5, 0.5])  # Neutral probability for BERT if skipped
    xgb_probs = np.array([0.5, 0.5])  # Neutral probability for XGBoost if skipped

    # Process BERT if text is available
    if has_text:
        bert_probs_raw = ClassifyText(text)
        bert_probs = np.array([bert_probs_raw[0].item(), bert_probs_raw[1].item()])

    # Process XGBoost if URL is available
    if has_url:
        print(urls[0])
        xgb_result = ClassifyUrl(urls[0])  # Use the first URL
        if xgb_result is not None:  # Valid URL
            xgb_probs = np.array(xgb_result)
        else:
            xgb_probs = np.array([0.0, 1.0])

    # Log probabilities
    print(f"Probabilities from BERT Model: {bert_probs}")
    print(f"Probabilities from XGBoost Model: {xgb_probs}")
    print(f"Dynamic Weights: BERT={bert_weight}, XGBoost={xgb_weight}")

    # Combine probabilities using dynamic weights
    combined_probs = (bert_weight * bert_probs) + (xgb_weight * xgb_probs)
    # print(f"Before normalizing: {combined_probs}")

    # Normalize with softmax to ensure probabilities sum to 1
    # combined_probs = softmax(combined_probs)
    predicted_class = np.argmax(combined_probs)

    print(f"Final probabilities: {combined_probs}")
    print(f"Predicted class: {predicted_class}")
    return predicted_class, combined_probs

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        email_text = data.get('email_text', '')

        if not email_text:
            return jsonify({'error': 'No email text provided'}), 400

        predicted_class, probs = ensemble_prediction(email_text)
        confidence = probs[predicted_class].item()

        result = {
            "prediction": "Phishing" if predicted_class == 1 else "Legitimate",
            "confidence": confidence * 100  # Convert numpy array to list for JSON serialization
        }

        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
