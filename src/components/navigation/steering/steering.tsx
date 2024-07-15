// components/SteeringWheel.js
import React, { useState, useRef } from 'react';

const SteeringWheel = () => {
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const initialMousePosition = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    initialMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const radian = Math.atan2(dy, dx);
    const degree = (radian * 180) / Math.PI;
    setAngle(degree);
    console.log(`Current Angle: ${degree}`);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stop dragging when the mouse leaves the component
      style={{
        transformOrigin: 'center',
        transform: `rotate(${angle}deg)`,
        cursor: 'pointer',
        display: 'inline-block',
      }}
    >
      {/* Replace this with your actual SVG */}
      <img src="../../images/steering/steering.svg" alt="Steering Wheel" />
    </div>
  );
};

export default SteeringWheel;
