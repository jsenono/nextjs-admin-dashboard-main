import React, { useState, useEffect } from 'react';


const VolumeControl = () => {
  const [volumeWidth, setVolumeWidth] = useState('50%'); // Initial width for volume level

  useEffect(() => {
    const interval = setInterval(() => {
      const minWidth = 10; // Minimum width percentage
      const maxWidth = 100; // Maximum width percentage
      const randomWidth = `${Math.random() * (maxWidth - minWidth) + minWidth}%`;
      setVolumeWidth(randomWidth);
    }, 100); // Interval time in milliseconds (e.g., 100ms for faster update)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="volume-control w-10">
      <div className="volume-level w-10" style={{ width: volumeWidth }}>
        {/* Optional: Add content inside the volume bar if needed */}
      </div>
    </div>
  );
};

export default VolumeControl;
