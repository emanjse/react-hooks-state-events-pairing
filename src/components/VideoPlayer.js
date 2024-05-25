import React from 'react';

function VideoPlayer({ embedUrl }) {
  return (
    <iframe
      width="919"
      height="525"
      src={embedUrl}
      frameBorder="0"
      allowFullScreen
      title="Video Player"
    />
  );
}

export default VideoPlayer;
