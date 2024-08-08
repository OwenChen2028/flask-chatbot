# Flask Chatbot App

This repository contains the code for a chatbot app made using Python Flask. Please follow the setup instructions below.

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
