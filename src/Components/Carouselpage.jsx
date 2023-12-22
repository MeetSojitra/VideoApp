import ReusableCarousel from "./ReusableCarousel";

// import image from public folder
// impo

import img1 from '../../public/images/img1.jpeg';
import img2 from '../../public/images/img2.jpeg';
import img3 from '../../public/images/img3.jpeg';

const Carouselpage = () => {
  const slides = [
    {
      image: img1,
      title: "First slide label",
      url: "https://player.vimeo.com/video/103007490",
    },
    {
      image: img2,
      title: "Second slide label",
      url: "https://player.vimeo.com/video/224187671",
    },
    {
      image: img3,
      title: "Third slide label",
      url: "https://player.vimeo.com/video/267309966",
    },
  ];

  return <ReusableCarousel slides={slides} />;
};

export default Carouselpage;
