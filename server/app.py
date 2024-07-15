# app.py
from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socketio.on('video-data')
def handle_video_data(data):
    emit('video-data', data, broadcast=True)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=3001)
