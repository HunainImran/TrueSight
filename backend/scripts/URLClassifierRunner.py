from feature_extractor import extract_features
import xgboost as xgb
# URL to analyze
def ClassifyUrl(url):
    status = 0
    model = xgb.XGBClassifier()
    model.load_model("xgb_model.json")
    # Extract features

    feature_vector = extract_features(url, status)
    print(feature_vector)
    if feature_vector:
        prediction = model.predict_proba([feature_vector[1:-1]])
        return prediction[0]
    else:
        print("Failed to extract features from the URL.")
