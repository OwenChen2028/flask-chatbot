import os
from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
import openai

app = Flask(__name__)
openai.api_key = os.getenv('OPENAI_KEY')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/echo', methods=['POST'])
def echo():
    data = request.get_json()
    message = data.get('message')
    conversation = data.get('conversation', [])

    conversation_with_system = [{"role": "system", "content": "You are a helpful assistant."}, {"role": "system", "content": "Please provide a response within one paragraph."}]
    conversation_with_system += conversation

    response = openai.ChatCompletion.create(
      model="gpt-3.5-turbo",
      messages=conversation_with_system
    )

    gpt_response = response['choices'][0]['message']['content']

    return jsonify({'message': gpt_response})

if __name__ == '__main__':
    app.run(debug=True)
