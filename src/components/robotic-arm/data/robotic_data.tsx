import React from 'react'
import RoboticArm from '../robotic-arm'
import FlashingBtn from './flashingBtn'
import RobotStats from './robotstats'

const RoboticData = () => {
  return (
    <div className='h-full'>

        
<div className="grid grid-cols-5 grid-rows-1 gap-1 h-full">
    <div className='bg-gray-7 h-full row-span-full ' >
        {/* <RoboticArm/> */}
       <img src="../images/robotic-arm/robot.gif" alt="Example GIF" width={300} height={200} />
        
    </div>
    <div className='bg-gray-7 h-full row-span-full' >
        <div className='h-full justify-center text-center'>
            <p>TOOLS</p>
            <button className='bg-green px-3 py-2 text-white rounded-sm w-11/12 mt-1'>Start Rover</button>
            <button className='bg-orange-500 px-3 py-2 text-white rounded-sm w-11/12  mt-1'>Stall Rover</button>



        </div>


    </div>
    
    <div className='bg-gray-5 h-full row-span-full col-span-3' >



        <RobotStats/>
    </div>
</div>
    
        
    </div>
  )
}

export default RoboticData