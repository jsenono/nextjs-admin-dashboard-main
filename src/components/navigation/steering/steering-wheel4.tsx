// components/SteeringWheel.js
import React, { useState, useRef, useEffect } from 'react';

const MAX_ROTATION = 480;

const SteeringWheelBtn = ({ svg }) => {
  const [rotation, setRotation] = useState(0);
  const intervalRef = useRef(null);
  const returningRef = useRef(false);
  

  const startRotation = (direction) => {
    clearInterval(intervalRef.current);
    clearInterval(returningRef.current);
    returningRef.current = null;

    intervalRef.current = setInterval(() => {
      setRotation((prevRotation) => {
        const newRotation = prevRotation + direction * 2;
        if (Math.abs(newRotation) <= MAX_ROTATION) {
          return newRotation;
        }
        return prevRotation;
      });
    }, 10);
  };

  const stopRotation = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;

    if (!returningRef.current) {
      returningRef.current = setInterval(() => {
        setRotation((prevRotation) => {
          const newRotation = prevRotation * 0.9; // Decrease rotation by 10% each step
          if (Math.abs(newRotation) < 1) {
            clearInterval(returningRef.current);
            returningRef.current = null;
            return 0;
          }
          return newRotation;
        });
      }, 10);
    }
  };

  return (

    
<div className="grid grid-cols-2 grid-rows-1 gap-1">
    <div ><div
        className="w-40 h-40 mt-1 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${svg})`, transform: `rotate(${rotation}deg)` }}
      ></div>
      
      </div>
    <div >
    <div className=" text-center mt-4 flex space-x-4 m-auto justify-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded "
          onMouseDown={() => startRotation(-1)}
          onMouseUp={stopRotation}
          onMouseLeave={stopRotation}
        >
         Left
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded "
          onMouseDown={() => startRotation(1)}
          onMouseUp={stopRotation}
          onMouseLeave={stopRotation}
        >
          Right
        </button>
      </div>


      <div className="gameBtns">
      <button className="button">
  <div>
    <span>
      <i>S</i>
    </span>
  </div>
  <div>
    <span>
      <i>A</i>
    </span>
  </div>
  <div>
    <span>
      <i>S</i>
    </span>
  </div>
  <div>
    <span>
      <i>D</i>
    </span>
  </div>
</button>


      </div>

    </div>
</div>
    

    
  );
};

export default SteeringWheelBtn;
