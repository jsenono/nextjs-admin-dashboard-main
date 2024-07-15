// CameraSelector.js
import { useEffect, useState } from 'react';

const CameraSelector = ({ onSelect }) => {
  const [cameras, setCameras] = useState([]);

  useEffect(() => {
    const fetchCameras = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoInputs = devices.filter(device => device.kind === 'videoinput');
        setCameras(videoInputs);
      } catch (error) {
        console.error("Error enumerating devices:", error);
      }
    };

    fetchCameras();
  }, []);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a camera...</option>
      {cameras.map(camera => (
        <option key={camera.deviceId} value={camera.deviceId}>
          {camera.label || `Camera ${camera.index}`}
        </option>
      ))}
    </select>
  );
};

export default CameraSelector;
