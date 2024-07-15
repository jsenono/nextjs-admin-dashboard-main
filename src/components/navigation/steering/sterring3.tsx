// components/SteeringWheel.js
import React, { useRef, useState } from 'react';
import { useDrag } from 'react-use-gesture';

const SteeringWheelAlt = ({ svg }) => {
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef(null);

  const bind = useDrag(({ movement: [mx], memo = rotation }) => {
    const angle = memo + mx; // Calculate new angle based on movement
    setRotation(angle);
    console.log(`Rotation: ${angle.toFixed(2)} degrees`);
    return memo;
  });

  return (
    <div
      {...bind()}
      style={{ width: '200px', height: '200px', margin: '0 auto', touchAction: 'none' }}
    >
      <div
        ref={wheelRef}
        style={{
          width: '100%',
          height: '100%',
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.1s',
        }}
      >
        <img src={svg} alt="Steering Wheel" style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default SteeringWheelAlt;
