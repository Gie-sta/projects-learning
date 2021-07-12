import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.title}
        className="ui image"
        src={video.image}
      />
      <div className="content">
        <div className="header">{video.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
