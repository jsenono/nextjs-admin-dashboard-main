import React from 'react'
import { Video } from 'lucide-react';
import { Play } from 'lucide-react';
import { Pause } from 'lucide-react';
import { Rewind } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { Pin } from 'lucide-react';

const CameraControls = ({ play, pause }) => {
  return (
   


<div className="grid grid-cols-3 grid-rows-2 gap-1 p-1 h-4/5 text-center">
    <div className='h-full rounded-sm text-center  bg-purple-500'><p className='justify-center text-center m-auto mx-2 mt-1 text-sm text-white'><Pin/></p></div>
    <div className='h-full bg-slate-200 rounded-sm'> <p className='justify-center text-center m-auto mx-2 mt-1' onClick={play} ><Play/></p></div>
    <div className='h-full bg-red-500 rounded-sm text-white justify-center text-center'> <p className='justify-center text-center m-auto mx-2 mt-1'><Video size={23}/></p></div>
    <div className='h-full bg-slate-200 rounded-sm'><p className='justify-center text-center m-auto mx-2 mt-1' onClick={pause}><Pause/></p></div>
    <div className='h-full bg-slate-200 rounded-sm'><p className='justify-center text-center m-auto mx-2 mt-1'><EyeOff/></p></div>
    <div className='h-full bg-slate-200 rounded-sm'><p className='justify-center text-center m-auto mx-2 mt-1'><Rewind/></p></div>
</div>
    
    
   
  )
}

export default CameraControls