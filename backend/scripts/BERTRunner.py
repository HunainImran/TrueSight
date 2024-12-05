import torch
# from transformers import BertForSequenceClassification, BertTokenizer
import re

# Load model directly
from transformers import AutoTokenizer, AutoModelForSequenceClassification

tokenizer = AutoTokenizer.from_pretrained("ElSlay/BERT-Phishing-Email-Model")
model = AutoModelForSequenceClassification.from_pretrained("ElSlay/BERT-Phishing-Email-Model")

# model_folder_path = 'BertModel/'  # Replace with the correct path

# Load the model and tokenizer
# model = BertForSequenceClassification.from_pretrained(model_folder_path)
# tokenizer = BertTokenizer.from_pretrained(model_folder_path)

model.eval()
def preprocess_input(email_text):
    email_text = str(email_text)
    # Remove URLs (http, https, www)
    email_text = re.sub(r'http\S+|www\S+|https\S+', '<URL>', email_text)
    # Remove 'Re:' from the beginning of the email subject if it exists
    email_text = re.sub(r'^re:\s*', '', email_text, flags=re.IGNORECASE)
    return email_text


def ClassifyText(email_text):
    # Preprocessing function
    processed_email = preprocess_input(email_text)
    inputs = tokenizer(processed_email, return_tensors="pt", truncation=True, padding='max_length', max_length=512)
    with torch.no_grad():  # No need to compute gradients for inference
        outputs = model(**inputs)  # Forward pass through the model
        logits = outputs.logits  # Get raw logits (predictions before applying softmax)
        probabilities = torch.softmax(logits, dim=-1).squeeze()  # Convert logits to probabilities
    
    return probabilities
#email_text = "Re: Congratulations! You've won a $1000 prize. Click here to claim it: http://example.com/"

#ClassifyText(email_text)

