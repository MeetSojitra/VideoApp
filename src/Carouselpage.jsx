import React from "react";
import ReusableCarousel from "./ReusableCarousel";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";

const Carouselpage = () => {
  const slides = [
    {
      image: img1,
      title: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: img2,
      title: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: img3,
      title: "Third slide label",
      caption: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    // Add more slides as needed
  ];

  return <ReusableCarousel slides={slides} />;
};

export default Carouselpage;
