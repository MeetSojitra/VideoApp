import Carousel from "react-bootstrap/Carousel";
import "react-modal-video/scss/modal-video.scss";

const ReusableCarousel = ({ slides }) => {
  
  return (
    <>
      <Carousel indicators={false} data-bs-theme="dark">
        {slides.map((slide, index) => (
          <Carousel.Item key={index} className="carousel-wrapper">
            
            {/* Corousel Image */}
            <img
              style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
              src={slide.image}
              alt={`Slide ${index + 1}`}
            />
              
              {/* Corousel Details */}
            <div className="carousel-details">
              
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
    </>
  );
};

export default ReusableCarousel;
