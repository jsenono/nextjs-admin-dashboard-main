"use client"

import React from 'react'

import ReactPlayer from 'react-player'




const CameraVideo = React.forwardRef((props, ref) => {
  return (
    <div>

<ReactPlayer 
url='https://tv-trtmuzik.medya.trt.com.tr/master.m3u8' type='HLS (m3u8)' 
controls={true}  width={450}  className='position-relative rounded-sm bg-black border-1 '
ref={ref}
playing={props.playing}
  />

    </div>
  )
}
)

export default CameraVideo