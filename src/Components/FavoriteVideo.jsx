// FavoriteVideo.jsx
import {} from "react";
import VideoGrid from "./VideoGrid";
import PropTypes from "prop-types";

const FavoriteVideo = ({ videosData }) => {
  FavoriteVideo.propTypes = {
    videosData: PropTypes.array.isRequired,
  };

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
