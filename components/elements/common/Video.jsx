import React, { useEffect, useRef } from 'react';

export default function Video(props) {
  const { src, className } = props;
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div>
      <div>
        <video
          className={className}
          playsInline
          loop
          muted
          controls
          alt="All the devices"
          src={src}
          ref={videoEl}
        />
      </div>
    </div>
  );
}
