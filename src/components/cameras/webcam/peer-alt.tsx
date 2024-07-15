import { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';
import CameraSelector from '@/components/cameras/webcam/peer/CameraSelector';
const VideoCall = () => {
  const [myPeer, setMyPeer] = useState<Peer | null>(null);
  const [myPeerId, setMyPeerId] = useState<string>('');
  const [partnerPeerId, setPartnerPeerId] = useState<string>('');
  const [selectedCamera, setSelectedCamera] = useState<string>('');

  const myVideoRef = useRef<HTMLVideoElement>(null);
  const partnerVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const peerId = generateRandomString();
    setMyPeerId(peerId);

    const peer = new Peer(peerId, {
      host: 'localhost',
      port: 9000,
      path: '/myapp',
    });

    setMyPeer(peer);

    peer.on('call', (call) => {
      navigator.mediaDevices.getUserMedia({
        video: { deviceId: selectedCamera },
        audio: true,
      })
      .then(stream => {
        if (myVideoRef.current) {
          myVideoRef.current.srcObject = stream; // Set local video stream
        }

        call.answer(stream); // Answer the call with your stream

        call.on('stream', (remoteStream) => {
          if (partnerVideoRef.current) {
            partnerVideoRef.current.srcObject = remoteStream; // Set remote partner's video stream
          }
        });
      })
      .catch(error => {
        console.error('Error accessing media devices: ', error);
      });
    });

    // Clean up function
    return () => {
      peer.disconnect();
      peer.destroy();
    };
  }, []);

  const generateRandomString = () => {
    return Math.random().toString(36).substring(2);
  };

  const handleCameraSelect = (deviceId: string) => {
    setSelectedCamera(deviceId);
  };

  const startVideoCall = () => {
    if (myPeer && partnerPeerId) {
      navigator.mediaDevices.getUserMedia({
        video: { deviceId: selectedCamera },
        audio: true,
      })
      .then(stream => {
        if (myVideoRef.current) {
          myVideoRef.current.srcObject = stream; // Set local video stream
        }

        const call = myPeer.call(partnerPeerId, stream);
        call.on('stream', (remoteStream) => {
          if (partnerVideoRef.current) {
            partnerVideoRef.current.srcObject = remoteStream; // Set remote partner's video stream
          }
        });
      })
      .catch(error => {
        console.error('Error accessing media devices: ', error);
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <p>Rover Cam ID: {myPeerId}</p>
      <input
        type="text"
        placeholder="Enter Partner Peer ID"
        value={partnerPeerId}
        onChange={(e) => setPartnerPeerId(e.target.value)}
        className="border border-gray-400 p-2 mb-2 rounded"
      />
      <button onClick={startVideoCall} className="bg-blue-500 text-white px-4 py-2 rounded">
        Enter Rover ID
      </button>

      <div className="flex justify-center mt-4">
        <div className="flex flex-col items-center">
          <p>Primary Feed</p>
          <video ref={myVideoRef} autoPlay playsInline className="w-64 h-auto border border-gray-400 rounded" />
        </div>
        <div className="flex flex-col items-center ml-4">
          <p>Peer Feed</p>
          <video ref={partnerVideoRef} autoPlay playsInline className="w-64 h-auto border border-gray-400 rounded" />
        </div>
      </div>

      {/* Render CameraSelector component */}
      <div className="mt-4">
        <label>Select Camera:</label>
        <CameraSelector onSelect={handleCameraSelect} />
      </div>
    </div>
  );
};

export default VideoCall;
