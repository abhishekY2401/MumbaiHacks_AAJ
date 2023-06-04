# from flask import Flask
# import requests

# app = Flask(__name__)

# @app.route('/api/complete/<query>')
# def complete_text(query):
#     try:
#         input_text = query  # Replace with your hardcoded input text

#         # Perform the API call and get the output
#         # Replace 'YOUR_API_KEY' with your actual API key
#         response = requests.post('https://free.churchless.tech/v1/chat/completions',
#                                  headers={
#                                      'Content-Type': 'application/json',
#                                      'x-api-key': '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'
#                                  },
#                                  json={'text': input_text})

#         if response.ok:
#             data = response.json()
#             output_text = data['choices'][0]['text']
#             print('Output:', output_text)
#         else:
#             print('Request failed with status:', response.status_code)

#     except Exception as e:
#         print('Request failed:', str(e))

#     return ''

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['*'])

@app.route("/")
def index():
    return "Welcome!"

@app.route("/hello_api")
def exec():
    input_text = 'provide me shoes'
    print(input_text)
    
    return input_text

@app.route('/api/complete', methods=['POST'])
def complete_text():
    input_text = request.json['input']
    
    # Perform the API call and get the output
    # Replace 'YOUR_API_KEY' with your actual API key
    response = requests.post('https://free.churchless.tech/v1/chat/completions',
                headers={
                    'Content-Type': 'application/json',
                    'x-api-key': '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'
                },
                json={'input': input_text})
    
    if response.status_code == 200:
        data = response.json()
        return jsonify({ 'input': input_text, 'output': data})
    else:
        return jsonify({'error': 'Request failed with status: {}'.format(response.status_code)})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
