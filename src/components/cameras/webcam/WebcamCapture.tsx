// components/WebcamCapture.js
import React, { useEffect, useRef } from 'react';

const WebcamCapture = ({ socket }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    async function getMedia() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          socket.emit('video-data', event.data);
        }
      };
      mediaRecorder.start(100); // Send data every 100ms
    }
    
    getMedia();
  }, [socket]);

  return <video ref={videoRef} autoPlay muted />;
};

export default WebcamCapture;
