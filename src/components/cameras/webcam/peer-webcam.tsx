// pages/index.js
import { useEffect, useRef } from 'react';
import Peer from 'peerjs';

const PeerVideo = () => {
  const videoRef = useRef();

  useEffect(() => {
    const peer = new Peer(undefined, {
      host: 'localhost',
      port: 4001,
      path: '/',
    });

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        videoRef.current.srcObject = stream;

        const call = peer.call('otherPeerId', stream); // Replace 'otherPeerId' with the actual peer ID
        call.on('stream', (remoteStream) => {
          if (videoRef.current.srcObject !== remoteStream) {
            videoRef.current.srcObject = remoteStream;
          }
        });
      })
      .catch((err) => console.error(err));

    return () => {
      peer.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Webcam Viewer</h1>
      <video autoPlay ref={videoRef} style={{ width: '100%', height: 'auto' }}></video>
    </div>
  );
};

export default PeerVideo;
