// VideoGrid.jsx
import {} from 'react';
import Video from './Video';

const VideoGrid = ({ videosData, handleFavoriteClick }) => {

  return (
    <div className="video-grid">
      {videosData.map((video, index) => (
        <Video key={index} {...video} handleFavoriteClick={() => handleFavoriteClick(video)} />
      ))}
    </div>
  );
};



export default VideoGrid;