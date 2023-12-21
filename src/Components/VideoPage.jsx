// VideoPage.jsx
import React, { useState } from 'react';
import VideoGrid from './VideoGrid';
import FavoriteVideo from './FavoriteVideo';

const VideoPage = ({ videosData }) => {
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  const handleFavoriteClick = (video, isFavorite) => {
    if (isFavorite) {
      setFavoriteVideos((prevFavorites) => prevFavorites.filter((favVideo) => favVideo !== video));
    } else {
      setFavoriteVideos((prevFavorites) => [...prevFavorites, video]);
    }
  };

  return (
    <div>
      {favoriteVideos.length > 0 && (
        <>
          <h2>Favorites</h2>
          <FavoriteVideo videosData={favoriteVideos} />
        </>
      )}

      <h2>All Videos</h2>
      <VideoGrid videosData={videosData} handleFavoriteClick={handleFavoriteClick} />
    </div>
  );
};

export default VideoPage;
