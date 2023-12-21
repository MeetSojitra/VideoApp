// Video.jsx
import React from "react";
import { FaHeart } from "react-icons/fa";

const Video = ({title,description,thumbnailUrl,videolink,handleFavoriteClick }) => {
  const [hovered, setHovered] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleHeartClick = (event) => {
    event.stopPropagation(); // Prevent thumbnail click when favorite button is clicked
    setIsFavorite(!isFavorite);
    handleFavoriteClick(!isFavorite); // Pass the isFavorite state to the parent component
  };

  return (
    <div
      className="video-item"
      onMouseEnter={() => {setHovered(true);}}
      onMouseLeave={() => {setHovered(false);}}
      onClick={() => {window.open(videolink, "_blank");}}
    >
      <img
        style={{ height: "25vh", width: "50vw", objectFit: "cover" }}
        src={thumbnailUrl}
        alt={title}
      />
      <div className="favorite-icon" onClick={handleHeartClick}>
        <FaHeart
          color={"rgba(255, 255, 255, 0.8)"}
          size={24}
        />
      </div>

      <div className="video-details">
        <h3>{title}</h3>
        {hovered && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Video;
