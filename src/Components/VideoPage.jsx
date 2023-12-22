import { useState } from "react";
import VideoGrid from "./VideoGrid";
import FavoriteVideo from "./FavoriteVideo";

const VideoPage = ({ videosData }) => {
  // State to store favorite videos
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  const handleFavoriteClick = (video, isFavorite) => {

    if (isFavorite) {
      // Remove the video from favorites
      setFavoriteVideos((prevFavorites) =>
        prevFavorites.filter((favVideo) => favVideo.title !== video.title)
      );
    } 
    else {
      // Check if the video is already in favorites
      const isAlreadyFavorite = favoriteVideos.some(
        (favVideo) => favVideo === video
      );

      // Add the video to favorites only if it's not already there
      if (!isAlreadyFavorite) {
        setFavoriteVideos((prevFavorites) => [...prevFavorites, video]);
      }
    }
  };

  return (
    <div>
      {favoriteVideos.length > 0 && (
        <>
          <main className="container">
            <h2 className="section-heading">Favorites</h2>
            <FavoriteVideo videosData={favoriteVideos} />
          </main>
        </>
      )}

      <main className="container">
        <h2 className="section-heading">All Videos</h2>
        <VideoGrid
          videosData={videosData}
          handleFavoriteClick={handleFavoriteClick}
        />
      </main>
    </div>
  );
};

export default VideoPage;
