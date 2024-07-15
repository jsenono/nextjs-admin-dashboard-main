import React from 'react'
// import Fader from "@/components/robotic-arm/faders/faders"
// import LinearFader from '@/components/robotic-arm/faders/faders'

import LiveCapture from "@/components/cameras/webcam/Webcam_live"
import PeerVideo from '../cameras/webcam/peer-webcam'
import PeertoPeerVideo from '../cameras/webcam/peertopeer'
import VideoCall from '../cameras/webcam/peer-alt'
import RangeSlider from '@/components/robotic-arm/faders/faders'
import VerticalRangeSlider from './faders/vertical-faders'
import RoboticData from './data/robotic_data'

const RoboticArm = () => {
  return (
    <div className='h-100'>
    

    
<div className="grid grid-cols-5 grid-rows-1 gap-4 h-full p-1">
    <div className="col-span-3 bg-slate-200 h-full">

    <div className="grid grid-cols-1 grid-rows-6 gap-2 h-full ">
    <div className='h-full bg-slate-200 p-1 rounded-sm row-span-4'>
{/* <VerticalFader/> */}
{/* <LiveCapture/> */}
<RangeSlider/>
{/* <VerticalRangeSlider/> */}


    </div>
    <div className='h-full  bg-zinc-100 rounded-sm row-span-2'>

        <RoboticData/>
    </div>
</div>
    


    </div>
    <div className="col-span-2 col-start-4 bg-slate-200 h-full">

        <div className='bg-black p-1 rounded-sm h-full'>

{/* <LiveCapture/> */}
{/* <PeerVideo/> */}
{/* <PeertoPeerVideo/> */}
{/* <VideoCall/> */}

        </div>



    </div>
</div>
    
    

        </div>
  )
}

export default RoboticArm