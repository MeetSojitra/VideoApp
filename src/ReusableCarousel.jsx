import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const ReusableCarousel = ({ slides }) => {
  
  return (
    <>
      <Carousel indicators={false} controls={false} pause={false} data-bs-theme="dark">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              style={{ height: "100vh", width: "100vw", objectFit: "cover" }}
              className="d-block w-100"
              src={slide.image}
              alt={`Slide ${index + 1}`}
            />
            <div className="carousel-caption">
              <div className="title-content">
                <h2 className="carousel-title">{slide.title}</h2>
              </div>
              {slide.videoUrl && (
                <div className="button-content">
                  <button
                    className="btn btn-primary"
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
