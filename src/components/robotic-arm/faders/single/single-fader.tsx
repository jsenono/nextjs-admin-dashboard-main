import React, { useState } from 'react';
import VolumeControl from './static';

const SingleFader = () => {
    const [sliderValue, setSliderValue] = useState(50); // Initial value
    const [disabled, setDisabled] = useState(false);   // State for input disabled/enabled
    const [volumeControlVisible, setVolumeControlVisible] = useState(true); // State for VolumeControl visibility

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    const toggleDisableInput = () => {
        setDisabled(!disabled);
        setVolumeControlVisible(!disabled); // Hide VolumeControl when disabling input
    };

    const toggleShowVolumeControl = () => {
        setVolumeControlVisible(true);
        setDisabled(false); // Ensure input is enabled when showing VolumeControl
    };

    return (
        <div className='h-full'>
            <div className="bg-white shadow-md rounded h-4/5">
                <input
                    id="slider"
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="m-auto mt-24 custom-slider appearance-none w-40 h-2 rounded-full bg-gray-200 outline-none"
                    style={{
                        '--thumb-color': '#4F46E5', // Adjust thumb color
                        '--thumb-protrusion': '-10px', // Adjust how much thumb protrudes outside
                    }}
                    disabled={disabled} // Disable input based on state
                />
            </div>

            {volumeControlVisible && <VolumeControl />}

            <div className="text-center mt-2 flex">
                <button className='bg-green mx-1 px-3 rounded-sm border-0 text-white' onClick={toggleShowVolumeControl}>S</button>
                <button className='bg-purple-700  px-3 rounded-sm border-0 text-white' onClick={toggleDisableInput}>E</button>
                <span className="text-lg font-bold text-gray-700 mx-1" >{sliderValue}</span>
            </div>
        </div>
    );
};

export default SingleFader;
