import { useEffect, useRef, useState } from 'react';

const WebcamStream = () => {
  const videoRef = useRef(null);
  const [devices, setDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState('');

  useEffect(() => {
    // Get the list of video input devices
    navigator.mediaDevices.enumerateDevices().then((deviceInfos) => {
      const videoDevices = deviceInfos.filter(
        (deviceInfo) => deviceInfo.kind === 'videoinput'
      );
      setDevices(videoDevices);
      if (videoDevices.length > 0) {
        setSelectedDeviceId(videoDevices[0].deviceId); // Default to the first device
      }
    });
  }, []);

  useEffect(() => {
    if (selectedDeviceId) {
      navigator.mediaDevices
        .getUserMedia({ video: { deviceId: { exact: selectedDeviceId } } })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => {
          console.error("Error accessing webcam: ", err);
        });
    }
  }, [selectedDeviceId]);

  const handleDeviceChange = (event) => {
    setSelectedDeviceId(event.target.value);
  };

  return (
    <div>
      <h1>Webcam Stream</h1>
      <select onChange={handleDeviceChange} value={selectedDeviceId}>
        {devices.map((device) => (
          <option key={device.deviceId} value={device.deviceId}>
            {device.label || `Camera ${device.deviceId}`}
          </option>
        ))}
      </select>
      <video ref={videoRef} autoPlay width="640" height="480" />

      
    </div>
  );
};

export default WebcamStream;
