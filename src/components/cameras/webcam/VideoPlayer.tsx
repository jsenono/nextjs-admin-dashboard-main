// components/VideoPlayer.js
import React, { useEffect, useRef } from 'react';

const VideoPlayer = ({ socket }) => {
  const videoRef = useRef(null);
  const mediaSourceRef = useRef(new MediaSource());

  useEffect(() => {
    const mediaSource = mediaSourceRef.current;
    const video = videoRef.current;
    video.src = URL.createObjectURL(mediaSource);

    mediaSource.addEventListener('sourceopen', () => {
      const sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8, opus"');
      socket.on('video-data', (data) => {
        sourceBuffer.appendBuffer(data);
      });
    });

    return () => {
      socket.off('video-data');
    };
  }, [socket]);

  return <video ref={videoRef} controls autoPlay />;
};

export default VideoPlayer;
