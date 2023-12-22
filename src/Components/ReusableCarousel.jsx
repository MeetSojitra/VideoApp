import Carousel from "react-bootstrap/Carousel";
import "react-modal-video/scss/modal-video.scss";

const ReusableCarousel = ({ slides }) => {
  // const [showModal, setShowModal] = useState(false);
  // const [videoUrl, setVideoUrl] = useState("");

  // const handleWatchVideo = (videoUrl) => {
  //   setVideoUrl(videoUrl);
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setVideoUrl("");
  //   setShowModal(false);
  // };

  return (
    <>
      <Carousel indicators={true} data-bs-theme="dark">
        {slides.map((slide, index) => (
          <Carousel.Item key={index} className="carousel-wrapper">
            <img
              style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
              className="d-block w-100"
              src={slide.image}
              alt={`Slide ${index + 1}`}
            />
            <div className="carousel-caption-new">
              <div className="title-content">
                <h2 className="carousel-title">{slide.title}</h2>
              </div>
              {slide.url && (
                <div className="button-content">
                  <button
                    className="btn btn-primary"
                    // onClick={() => handleWatchVideo(slide.url)}
                  >
                    Watch Video
                  </button>
                </div>
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <video
            controls
            autoPlay
            muted
            playsInline
            style={{ widt h: "100%" }}
            src={videoUrl}
            type="video/mp4"
          />
        </Modal.Body>
      </Modal> */}
    </>
  );
};

export default ReusableCarousel;
