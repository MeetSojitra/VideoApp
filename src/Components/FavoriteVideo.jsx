// FavoriteVideo.jsx
import React from 'react';
import VideoGrid from './VideoGrid';

const FavoriteVideo = ({ videosData }) => {
  if (videosData.length === 0) {
    return null; 
  }

  return (
    <div className="favorite-video-grid">
      <VideoGrid videosData={videosData} />
    </div>
  );
};

export default FavoriteVideo;
