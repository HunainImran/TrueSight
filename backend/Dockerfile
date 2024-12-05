# Use a Python 3.9 base image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the backend files into the container
COPY ./backend /app

# Install the required dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port that Flask will run on
EXPOSE 5000

# Set the entry point to run the Flask API
CMD ["python", "scripts/EnsembleApi.py"]
