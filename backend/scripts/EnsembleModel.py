from URLClassifierRunner import ClassifyUrl
from BERTRunner import ClassifyText
import numpy as np
from scipy.special import softmax
import re

def ExtractURLs(email_text):
    url_pattern = r'(http[s]?://\S+|www\.\S+)'
    # Find all matches of the pattern in the email text
    urls = re.findall(url_pattern, email_text)
    return urls

def ensemble_prediction(text, bert_weight=0.7, xgb_weight=0.3):
    url = ExtractURLs(text) #Assume there is atleast and atmost one url in the text
    #Extract urls from text
    bert_probs = ClassifyText(text)  
    xgb_probs = ClassifyUrl(url[0])
    bert_values = np.array([bert_probs[0].item(), bert_probs[1].item()])
    xgb_probs = np.array(xgb_probs)  
    print(f"Probabilities from BERT Model: {bert_values}")
    print(f"Probabilities from XGBoost Model: {xgb_probs}")
    # Weighted average
    combined_probs = (bert_weight * bert_values) + (xgb_weight * xgb_probs)
    print(f"Before normalizing: {combined_probs}")
    # Normalize with softmax to ensure probabilities sum to 1
    # final_probs = softmax(combined_probs)
    
    predicted_class = np.argmax(combined_probs)
    print(f"Final probabilities: {combined_probs}")
    print(f"Predicted class: {predicted_class}" )
    return predicted_class, combined_probs

email_text = "https://facebook.com Subject: Account Verification Required – Immediate Action Needed Dear Michael, We hope you're doing well. We're writing to inform you that we’ve recently updated our account verification process for enhanced security. To ensure your account remains secure, we require you to verify your details and confirm some information. Please click the link below to verify your account and complete the process: Verify Your Account Once completed, you'll have full access to your account and any new features. If you do not verify within the next 72 hours, your account may be restricted temporarily. Thank you for your prompt attention to this matter. If you have any questions, feel free to contact us. Best regards, The Microsoft Team"
ensemble_prediction(email_text)


#pip install whois pandas tldextract bs4 Levenshtein xgboost scikit-learn requests dnspython torch transformers
#sudo myenv\Scripts\activate