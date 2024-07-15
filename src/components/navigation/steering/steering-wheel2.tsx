// components/SteeringWheel.js
import React, { useRef, useState } from 'react';
import { useDrag } from 'react-use-gesture';
import { animated, useSpring } from 'react-spring';

const SteeringWheelAlt2 = ({ svg }) => {
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef(null);

  const bind = useDrag(({ movement: [mx, my], memo = rotation }) => {
    const angle = memo + mx; // Calculate new angle based on movement
    setRotation(angle);
    console.log(`Rotation: ${angle.toFixed(2)} degrees`);
    return memo;
  });

  const props = useSpring({
    transform: `rotate(${rotation}deg)`,
  });

  return (
    <div
      {...bind()}
      style={{ width: '200px', height: '200px', margin: '0 auto', touchAction: 'none' }}
    >
      <animated.div style={{ ...props, width: '100%', height: '100%' }} ref={wheelRef}>
        <img src={svg} alt="Steering Wheel" style={{ width: '100%', height: '100%' }} />
      </animated.div>
    </div>
  );
};

export default SteeringWheelAlt2;
