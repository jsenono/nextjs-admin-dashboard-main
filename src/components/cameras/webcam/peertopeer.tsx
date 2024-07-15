import { useEffect, useRef, useState } from 'react';
import Peer from 'peerjs';
import CameraSelector from './utils/cameraselect';

const PeertoPeerVideo = () => {
  const myVideoRef = useRef<HTMLVideoElement>(null);
  const partnerVideoRef = useRef<HTMLVideoElement>(null);
  const [myUniqueId, setMyUniqueId] = useState<string>("");
  const [partnerUniqueId, setPartnerUniqueId] = useState<string>("");
  const [selectedCamera, setSelectedCamera] = useState('');
  const [peer, setPeer] = useState<Peer | null>(null);

  const generateRandomString = () => Math.random().toString(36).substring(2);

  useEffect(() => {
    const id = generateRandomString();
    setMyUniqueId(id);
    const newPeer = new Peer(id, {
      host: 'localhost',
      port: 9000,
      path: '/myapp',
    });
    setPeer(newPeer);

    navigator.mediaDevices.getUserMedia({
      video: { deviceId: selectedCamera },
      audio: true,
    }).then(stream => {
      if (myVideoRef.current) {
        myVideoRef.current.srcObject = stream;
      }
    });

    return () => {
      newPeer.destroy();
    };
  }, [selectedCamera]);

  useEffect(() => {
    if (partnerUniqueId && peer) {
      const call = peer.call(partnerUniqueId, null);
      call.on('stream', (remoteStream) => {
        if (partnerVideoRef.current) {
          partnerVideoRef.current.srcObject = remoteStream;
        }
      });
    }
  }, [partnerUniqueId, peer]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.start();

      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'video/mp4' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'recording.mp4';
        link.click();
      };

      setTimeout(() => {
        mediaRecorder.stop();
      }, 5000); // Stop recording after 5 seconds
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <p>Your ID: {myUniqueId}</p>
      <p>Partner ID: {partnerUniqueId}</p>
      <CameraSelector onSelect={setSelectedCamera} />

      <div className='flex'>
        <button className='bg-slate-800 p-2 m-3 text-white' onClick={() => myVideoRef.current?.paused ? myVideoRef.current?.play() : myVideoRef.current?.pause()}>Pause/Resume</button>
        <button onClick={startRecording} className='bg-red p-2 m-3 text-white'>Record</button>
      </div>

      <video className='w-72' playsInline ref={myVideoRef} autoPlay muted />
      <video className='w-72' playsInline ref={partnerVideoRef} autoPlay />

    </div>
  );
};

export default PeertoPeerVideo;
