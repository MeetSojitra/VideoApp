// VideoGrid.jsx
import { useState } from "react";
import Video from "./Video";
import Modal from "../Components/modal";

const VideoGrid = ({ videosData, handleFavoriteClick }) => {
  const [openModal, setOpenModal] = useState(false);
  const [videoData, setVideoData] = useState(null);

  return (
    <div className="video-grid">
      {videosData.map((video, index) => (
        <Video
          key={index}
          {...video}
          handleFavoriteClick={() => handleFavoriteClick(video)}
          onClick={() => {
            setOpenModal(true);
            setVideoData(video);
          }}
        />
      ))}
      {videoData && (
        <Modal
          isOpen={openModal && videoData}
          setOn={setOpenModal}
          data={videoData}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default VideoGrid;
