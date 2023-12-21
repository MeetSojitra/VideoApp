// VideoGrid.jsx
import React from 'react';
import Video from './Video';

const VideoGrid = ({ videosData, handleFavoriteClick }) => {
  return (
    <div className="video-grid">
      {videosData.map((video, index) => (
        <Video key={index} {...video} handleFavoriteClick={(isFavorite) => handleFavoriteClick(video, isFavorite)} />
      ))}
    </div>
  );
};

export default VideoGrid;
