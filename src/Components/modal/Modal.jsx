import ReactPortal from "./ReactPortal";
import Vimeo from "@u-wave/react-vimeo";

// Modal component.
const Modal = ({ isOpen, data, onClose }) => {
  const { description, tags, title, videolink } = data;

  // if modal is not open, return null.
  if (!isOpen) return null;

  return (
    <main>
      {/* Modal Background */}
      <ReactPortal wrapperId="react-portal-modal-container">

        <div className="main-wrapper">

          {/* Modal Close Button */}
          <button className="close" onClick={() => onClose()}>
            close
          </button>

          {/* Modal Heading */}
          {/* ref https://www.npmjs.com/package/@u-wave/react-vimeo */}
          <div className="">
            <Vimeo
              video={videolink}
              autoplay
              className="video-wrapper"
              width={"100%"}
              responsive
            />
          </div>

          {/* Modal Prompt Text */}
          <div className="content">
            <h4 className="title">{title}</h4>
            <div className="tags">
              {tags.map((tag) => (
                <p key={tag} className="tag">
                  {tag}
                </p>
              ))}
            </div>
            <p className="description">{description}</p>
          </div>
          
        </div>
      </ReactPortal>
    </main>
  );
};
export default Modal;
