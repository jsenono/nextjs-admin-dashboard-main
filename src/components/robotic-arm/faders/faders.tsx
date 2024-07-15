import React, { useState } from 'react';
import SingleFader from './single/single-fader';

const RangeSlider = () => {
    const [sliderValue, setSliderValue] = useState(50); // Initial value

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    return (

      <div className='h-full'>

<div className="grid grid-cols-5 grid-rows-5 gap-2 h-full">
    <div className='bg-slate-400 h-full p-1 row-span-full' >
<SingleFader/>
    </div>
    <div className='bg-slate-400 h-full p-1 row-span-full'>
<SingleFader/>
    </div>
    <div className='bg-slate-400 h-full p-1 row-span-full'>3</div>
    <div className='bg-slate-400 h-full p-1 row-span-full'>4</div>
    <div className='bg-slate-400 h-full p-1 row-span-full'>5</div>
</div>
    

      </div>
      
    );
};

export default RangeSlider;
