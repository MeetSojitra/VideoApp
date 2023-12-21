// VideoPage.jsx
import { useState } from "react";
import VideoGrid from "./VideoGrid";
import FavoriteVideo from "./FavoriteVideo";
import PropTypes from "prop-types";

const VideoPage = ({ videosData }) => {
  VideoPage.propTypes = {
    videosData: PropTypes.array.isRequired,
  };
  const [favoriteVideos, setFavoriteVideos] = useState([]);

  const handleFavoriteClick = (video, isFavorite) => {
    if (isFavorite) {
      setFavoriteVideos((prevFavorites) =>
        prevFavorites.filter((favVideo) => favVideo !== video)
      );
    } else {
      setFavoriteVideos((prevFavorites) => [...prevFavorites, video]);
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
