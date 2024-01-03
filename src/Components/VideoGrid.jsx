import { useState } from "react";
import Video from "./Video";
import Modal from "./modal/Modal";

const VideoGrid = ({ videosData, handleFavoriteClick }) => {
  const [openModal, setOpenModal] = useState(false);
  const [ModalVideo, setVideoData] = useState(null);

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
      {ModalVideo && (
        <Modal
          isOpen={openModal && ModalVideo}
          setOn={setOpenModal}
          data={ModalVideo}
          onClose={() => setOpenModal(false)} // when the close buttonn click setOpenModel set the state to false
        />
      )}
    </div>
  );
};

export default VideoGrid;
