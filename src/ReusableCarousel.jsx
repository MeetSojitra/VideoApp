import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ReusableCarousel = ({slides}) => {
  return (
    <Carousel indicators={false} data-bs-theme="dark">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
            className="d-block w-100"
            src={slide.image}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <h5>{slide.title}</h5>
            <p>{slide.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ReusableCarousel;
