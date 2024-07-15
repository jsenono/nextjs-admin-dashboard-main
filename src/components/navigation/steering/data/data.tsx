// components/ProgressBarComponent.js
import { useState, useEffect, useRef } from 'react';

const ProgressBarComponent = () => {
  const [value, setValue] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [retracting, setRetracting] = useState(false);
  const [progressbg, setProgressbg] = useState("");

  const increaseProgress = () => {
if (value>30) {
    setProgressbg("red")
    
}
else{
    setProgressbg("green")
}

    setRetracting(false);
    clearInterval(intervalId);
    const id = setInterval(() => {
      setValue((prev) => Math.min(prev + 1, 100)); // Limit to 100
    }, 10);
    setIntervalId(id);
  };

  const decreaseProgress = () => {
    setRetracting(false);
    clearInterval(intervalId);
    const id = setInterval(() => {
      setValue((prev) => Math.max(prev - 1, 0)); // Limit to 0
    }, 5);
    setIntervalId(id);
  };

  const stopProgress = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setRetracting(true);
  };

  useEffect(() => {
    if (retracting && intervalId === null) {
      const id = setInterval(() => {
        setValue((prev) => {
          if (prev <= 0) {
            clearInterval(id);
            setRetracting(false);
            return 0;
          }
          return prev - 1;
        });
      }, 5);
      setIntervalId(id);
    }
  }, [retracting, intervalId]);

  return (
    <div>
      <div>
        <button onMouseDown={increaseProgress} onMouseUp={stopProgress} onMouseLeave={stopProgress}>
          Increase
        </button>
        <button onMouseDown={decreaseProgress} onMouseUp={stopProgress} onMouseLeave={stopProgress}>
          Decrease
        </button>
      </div>
      <div style={{ border: '1px solid #000', width: '2%', height: '90px', marginTop: '20px' }}>
        <div style={{ height: `${value}%`, width: '100%', backgroundColor: `${progressbg}`, transition: 'width 0.1s' }} />
      </div>
    </div>
  );
};

export default ProgressBarComponent;
