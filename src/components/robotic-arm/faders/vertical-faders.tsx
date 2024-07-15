import React, { useState } from 'react';

const VerticalRangeSlider = () => {
    const [sliderValue, setSliderValue] = useState(50); // Initial value

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded px-4 py-8 mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slider">
                Custom Vertical Slider
            </label>
            <div className="h-64 w-6 relative">
                <input
                    id="slider"
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="custom-slider-vertical absolute -top-1/2 transform -translate-y-1/2 appearance-none h-full w-full rounded-full bg-gray-200 outline-none overflow-visible"
                    style={{
                        '--thumb-size': '30px', // Adjust thumb size
                        '--thumb-color': '#4F46E5', // Adjust thumb color
                        '--thumb-protrusion': '-10px', // Adjust how much thumb protrudes outside
                        'transform': 'rotate(-90deg)', // Rotate slider
                        'transform-origin': 'center', // Ensure rotation origin is centered
                    }}
                />
            </div>
            <div className="text-center mt-4">
                <span className="text-lg font-bold text-gray-700">{sliderValue}</span>
            </div>
        </div>
    );
};

export default VerticalRangeSlider;
