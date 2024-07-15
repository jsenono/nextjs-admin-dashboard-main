// components/CameraSelector.tsx

import { useEffect, useState } from 'react';

type CameraSelectorProps = {
  onSelect: (deviceId: string) => void;
};

const CameraSelector = ({ onSelect }: CameraSelectorProps) => {
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);

  useEffect(() => {
    // Fetch available media devices on component mount
    navigator.mediaDevices.enumerateDevices().then(devices => {
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setDevices(videoDevices);
    });
  }, []);

  const handleDeviceChange = (deviceId: string) => {
    onSelect(deviceId);
  };

  return (
    <select onChange={(e) => handleDeviceChange(e.target.value)} className="border border-gray-400 p-2 rounded">
      <option value="">Select Camera</option>
      {devices.map(device => (
        <option key={device.deviceId} value={device.deviceId}>{device.label}</option>
      ))}
    </select>
  );
};

export default CameraSelector;
