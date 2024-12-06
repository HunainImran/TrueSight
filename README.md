# **Truesight: Phishing Email Detection**

*Detect phishing attempts in emails with AI-powered analysis.*

## **Overview**
Truesight is an advanced email phishing detection system powered by machine learning models. It analyzes both the body text and embedded URLs within emails to determine whether they are phishing attempts or legitimate emails. Truesight provides real-time protection and helps safeguard users from malicious phishing attacks.

This repository contains the backend (for prediction using a fine-tuned BERT model and URL classifier) and the frontend (a user-friendly interface) for Truesight.

---

## **Table of Contents**
- [Technologies & Tools](#technologies--tools)
- [Features](#features)
- [Demo](#demo)
- [Evaluation Metrics](#evaluation-metrics)
- [Screenshots](#screenshots)
- [Setup & Installation](#setup--installation)
  - [Docker Setup](#docker-setup)
  - [Manual Setup](#manual-setup)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)

---

## **Technologies & Tools**
Truesight is built with a combination of cutting-edge technologies and frameworks to deliver an efficient and scalable phishing detection system.

![Python Logo]![image](https://github.com/user-attachments/assets/ac841d8c-6f2a-4d10-a777-dd9f17f32c1b) ![Flask Logo]![image](https://github.com/user-attachments/assets/7596bab6-be11-44fc-b94d-9f1e5ee68482) ![Next Logo]![image](https://github.com/user-attachments/assets/9526d194-f4ef-4832-8fd6-5de778f0790b) ![Docker Logo]![image](https://github.com/user-attachments/assets/79c7405f-b322-4c0f-9903-3c479705da71) ![Hugging Face Logo]![image](https://github.com/user-attachments/assets/b71298ef-65bf-4da9-838f-47796550c17c)

- **Backend**:
  - Python
  - Flask (for API server)
  - Hugging Face Transformers (BERT model)
  - XGBoost (URL classifier)
  
- **Frontend**:
  - Next (UI)
  - Tailwind CSS (styling)

- **Tools**:
  - Docker (for containerization)
  - Hugging Face (for hosting and accessing the model)

---

## **Features**
- **Phishing Detection**: Detects phishing attempts using an ensemble model combining BERT (for email body analysis) and XGBoost (for URL analysis).
- **Real-time Protection**: Provides immediate results for suspicious email content or embedded URLs.
- **User-friendly UI**: Simple, modern interface for users to paste suspicious email content for analysis.
- **Confidence Scoring**: Provides confidence scores for predictions to show how sure the model is about the classification.

---

## **Demo**
- **Live Demo**: [Coming Soon]
- **UI Preview**:  
  - ![image](https://github.com/user-attachments/assets/52c12daa-57f0-4a0e-9141-73a4a6e5acc2)
  - ![image](https://github.com/user-attachments/assets/3529dafa-21e8-4698-ab51-e139b4b9d6f6)
  - ![image](https://github.com/user-attachments/assets/cfe5f4e4-41ea-44d9-9d86-592a191a028a)
  - ![image](https://github.com/user-attachments/assets/9c1511ee-6775-4fe6-82ba-bcaf65ad09ae)

---

## **Evaluation Metrics**
### **Classification Report**
- ![image](https://github.com/user-attachments/assets/d68c1635-e00f-4127-9c69-74a13ad0b0f7)

### **Confusion Matrix**
- ![image](https://github.com/user-attachments/assets/b88f5372-f386-4716-91a7-4335c351c31d)

---

## **Setup & Installation**

### **Docker Setup**
To run the Truesight application using Docker and Docker Compose, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/truesight.git
   cd truesight
   ```

2. **Build the Docker containers**:
   This will build both the backend (Flask API) and the frontend (React application).
   ```bash
   docker-compose build
   ```

3. **Start the containers**:
   Start the Docker containers using `docker-compose`:
   ```bash
   docker-compose up
   ```

   This will start:
   - **Frontend** on `http://localhost:3000`
   - **Backend API** on `http://localhost:5000`

4. **Open the application**:
   Visit the application in your browser by navigating to [http://localhost:3000](http://localhost:3000).

### **Manual Setup**
If you prefer not to use Docker, you can run Truesight manually by following these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/truesight.git
   cd truesight
   ```

2. **Set up Python dependencies**:
   Install the required dependencies for the backend:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Set up React dependencies**:
   Install the required dependencies for the frontend:
   ```bash
   cd frontend
   npm install
   ```

4. **Run the Backend API**:
   In the `backend` directory, start the Flask API server:
   ```bash
   python app.py
   ```

5. **Run the Frontend**:
   In the `frontend` directory, start the React application:
   ```bash
   npm start
   ```

6. **Access the application**:
   - The frontend should now be available at [http://localhost:3000](http://localhost:3000).
   - The backend API will be running at [http://localhost:5000](http://localhost:5000).

---

## **Usage**

1. **Input**: Paste your suspicious email content or URL into the provided text area on the frontend.
2. **Submit**: Press the “Check for Phishing” button to get the results.
3. **Result**: The backend will classify the email as either phishing or legitimate with a confidence score.

---

