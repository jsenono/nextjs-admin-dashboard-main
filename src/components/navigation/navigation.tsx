"use client"

import React, { useRef } from 'react'
import CameraVideo from '../cameras/camera-video'
import SteeringWheel from './steering/steering'
import SteeringWheelAlt from './steering/sterring3'
import SteeringWheelAlt2 from './steering/steering-wheel2'
import SteeringWheelBtn from './steering/steering-wheel4'
import ProgressBarComponent from './steering/data/data'
import ValuesComponent from '../telemetry/telemetry.jsx'
import WebcamStream from '../cameras/webcam/webcam'
// import VideoControls from './video-controls/video-controls'
// import CameraControls from './camera-controls/camera-controls'
// import CameraStats from './camera-status/camera-stats'

const NavigationRover = () => {

  //   const playerRef = useRef(null);

  // const play = () => {
  //   playerRef.current.getInternalPlayer().play();
  // };

  // const pause = () => {
  //   playerRef.current.getInternalPlayer().pause();
  // };


  return (
    <div className='bg-slate-300 p-3 rounded-sm h-100 '>

        <div className='grid md:grid-cols-6 h-full gap-2 my-1'>

            <div className='bg-slate-100  rounded-m p-2 flex flex-col items-center justify-center md:col-span-3'>

            {/* <CameraVideo/> */}

            <WebcamStream/>

            </div>

            {/* mini cameras */}

           

            {/* mini cameras out */}

            
            
            
      <div className='bg-neutral-100 rounded-m p-2 flex flex-col items-center justify-center md:col-span-3'>



{/*Video Controls Section*/}
<div className='p-1 m-1 h-1/2 bg-gray-3 w-full rounded-sm'>



{/* <SteeringWheelAlt svg="../../images/steering/steering.svg"/> */}
{/* <SteeringWheelBtn svg="../../images/steering/steering.svg"/> */}
<ProgressBarComponent/>
{/* <ValuesComponent/> */}
{/* <WebcamStream/> */}


</div>

{/*controls*/}


<div className='p-1 m-1 h-1/2 bg-gray-2 w-full rounded-sm'>

<div className='gap-1 '>

    {/*Rover Controls*/}
    <SteeringWheelBtn svg="../../images/steering/steering.svg"/>

    

</div>


</div>
            
            </div>



        </div>


    </div>
  )
}

export default NavigationRover