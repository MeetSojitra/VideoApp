import React from "react";
import { FaHeart } from "react-icons/fa";

const Video = ({
  title,
  description,
  thumbnailUrl,
  handleFavoriteClick,
  onClick,
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleHeartClick = (event) => {
    event.stopPropagation();
    setIsFavorite(!isFavorite);
    handleFavoriteClick(!isFavorite); 
  };

  return (
    <div
      className="video-item"
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => {
        onClick();
      }}
    >
      <img
        style={{objectFit: "cover" }}
        src={thumbnailUrl}
        alt={title}
      />
      
      <div className="favorite-icon" onClick={handleHeartClick}>
        <FaHeart color={"rgba(255, 255, 255, 0.8)"} size={24} />
      </div>

      <div className="video-details">
        <h3>{title}</h3>
        {hovered && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Video;
