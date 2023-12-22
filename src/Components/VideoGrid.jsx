import { useState } from "react";
import Video from "./Video";
import Modal from "./modal/Modal";

const VideoGrid = ({ videosData, handleFavoriteClick }) => {
  const [openModal, setOpenModal] = useState(false);
  const [videoData, setVideoData] = useState(null);

  return (
    <div className="video-grid">
      {videosData.map((video, index) => (
        <Video
          key={index}
          {...video}
          handleFavoriteClick={() => handleFavoriteClick(video)} // function to handle favorite click event
          onClick={() => {
            setOpenModal(true);
            setVideoData(video);
          }} // function to handle video click event and open the modal
        />
      ))}
      {videoData && (
        <Modal
          isOpen={openModal && videoData}
          setOn={setOpenModal}
          data={videoData}
          onClose={() => setOpenModal(false)} // function to handle modal close event
        />
      )}
    </div>
  );
};

export default VideoGrid;
