from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/data')
def api_data():
    data = {'message': 'Hello from Flask API!', 'data': [1, 2, 3, 4, 5]}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
