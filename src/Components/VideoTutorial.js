import React from 'react';

const VideoTutorial = ({ title }) => {
  return (
    <div className="video-tutorial">
      <h3>{title}</h3>
      <video controls>
        <source src="sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoTutorial;