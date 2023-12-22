import ReusableCarousel from "./ReusableCarousel";
import img1 from '/images/img1.jpeg';
import img2 from '/images/img2.jpeg';
import img3 from '/images/img3.jpeg';
import img4 from '/images/img4.jpeg';

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
    {
      image: img4,
      title: "Fourth slide label",
      url: "https://player.vimeo.com/video/267309966",
    }
  ];

  return <ReusableCarousel slides={slides} />;
};

export default Carouselpage;
