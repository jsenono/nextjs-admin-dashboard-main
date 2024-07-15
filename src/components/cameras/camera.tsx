"use client"

import React, { useRef } from 'react'
import CameraVideo from './camera-video'
import VideoControls from './video-controls/video-controls'
import CameraControls from './camera-controls/camera-controls'
import CameraStats from './camera-status/camera-stats'

const Camera = () => {

    const playerRef = useRef(null);

  const play = () => {
    playerRef.current.getInternalPlayer().play();
  };

  const pause = () => {
    playerRef.current.getInternalPlayer().pause();
  };


  return (
    <div className='bg-slate-300 p-3 rounded-sm h-100 '>

        <div className='grid md:grid-cols-6 h-full gap-2 my-1'>

            <div className='bg-slate-100  rounded-m p-2 flex flex-col items-center justify-center md:col-span-3'>

            <CameraVideo ref={playerRef}/>
            </div>

            {/* mini cameras */}

            <div className='bg-neutral-100 rounded-m p-1 flex flex-col  md:col-span-1 justify-center'>

                {/* mini camera 1 */}

                <div className='bg-slate-700 w-full h-1/2 p-1 rounded-sm my-1 '>

    
                </div>


                {/* mini camera2 */}

                <div className='bg-slate-700 w-full h-1/2 p-1 my-1 '>

    
                </div>



 
            
            </div>

            {/* mini cameras out */}

            
            <div className='bg-neutral-100 rounded-m p-2 flex flex-col items-center justify-center md:col-span-2'>

{/*Video Controls Section*/}
<div className='p-1 m-1 h-2/3 bg-gray-3 w-full rounded-sm'>

<CameraStats/>
</div>

{/*controls*/}


<div className='p-1 m-1 h-1/3 bg-gray-2 w-full rounded-sm'>

<div className='grid md:grid-cols-2 h-full gap-1 '>

    {/*Video Controls*/}

    <div className='md:col-span-1 bg-zinc-100 h-full rounded-sm '>
<p>Camera controls</p>

<CameraControls play={play} pause={pause}/>

    </div>


    {/*Video Controls*/}


    <div className='md:col-span-1 h-full rounded-sm '>
<p>Video Controls</p>
<VideoControls/>

    </div>


</div>


</div>
            
            </div>



        </div>


    </div>
  )
}

export default Camera