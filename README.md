# Flask Chatbot

Flask Chatbot © 2023 by Owen Chen is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/?ref=chooser-v1) 

![image](https://github.com/user-attachments/assets/2ac563a3-ff7a-41fd-a86d-3c722f861056)

This repository contains the code for a chatbot web app made using Python Flask. It utilizes OpenAI's API to generate responses. Please follow the setup instructions below.

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

## Interact with the Chatbot

Open your web browser and visit `http://localhost:5000` to interact with the chatbot.
