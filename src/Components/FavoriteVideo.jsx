import VideoGrid from "./VideoGrid";

const FavoriteVideo = ({ videosData , handleFavoriteClick}) => {
  // If there are no videos, don't render this component
  if (videosData.length === 0) {
    return null;
  }

  // Filter videos to only show favorite videos
  return (
    <div>
      <VideoGrid 
        videosData={videosData}
        handleFavoriteClick={handleFavoriteClick}
      />
    </div>
  );
};

export default FavoriteVideo;
