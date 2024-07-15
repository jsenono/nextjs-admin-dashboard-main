// pages/index.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import WebcamCapture from '../../cameras/webcam/WebcamCapture';
import VideoPlayer from '../../cameras/webcam/VideoPlayer';

export default function LiveCapture() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io('http://localhost:3001');
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Webcam Streaming</h1>
      {socket && (
        <>
          <WebcamCapture socket={socket} />
          <VideoPlayer socket={socket} />
        </>
      )}
    </div>
  );
}
