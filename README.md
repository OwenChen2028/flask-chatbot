# Flask ChatGPT Integration

This repository contains the code for integrating ChatGPT with a simple Flask web application using Python. It provides a local server for testing purposes and demonstrates how to leverage the power of ChatGPT for interactive conversations within a web-based platform. Explore the code and follow the setup instructions to start integrating ChatGPT into your web applications.

## Clone the Repository

Clone the repository by running the following command:

```
git clone https://github.com/ilikeovensalot/flask-chatgpt.git
```

## Navigate to the Directory

Navigate to the cloned repository's directory by running the following command:

```
cd flask-chatgpt
```

## Install Dependencies

Install the project dependencies by running the following command:

```
pip install -r requirements.txt
```

## Create .env File

Create a `.env` file in the project root directory and add the following environment variable:

```
OPENAI_KEY=your_key_here
```

Replace `your_key_here` with the actual value for your OpenAI API key.

## Run the Flask App

Run the Flask app by executing the following command:

```
python app.py
```

This will start the server on `http://localhost:5000`.

## Interact with ChatGPT

Open your web browser and visit `http://localhost:5000` to interact with the ChatGPT integrated Flask application. You can send POST requests to `http://localhost:5000/echo` to interact with the ChatGPT model. The payload should be a JSON object containing a `message` and an optional `conversation` list.

## Additional Steps

Please note that the provided instructions assume you have the necessary access and credentials to set up and configure the OpenAI API. Make sure to replace the placeholder value in the `.env` file and follow the respective platform's documentation for accurate setup. If you have any further questions or issues, please let us know. Happy testing!
