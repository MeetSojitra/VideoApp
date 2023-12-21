import React from 'react'
import Carouselpage from './Components/Carouselpage'
import VideoPage from './Components/VideoPage';

const App = () => {

  const [videosData, setVideosData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://video-api-dot-dj-virtual-spaces.el.r.appspot.com/");
        const data = await response.json();
        setVideosData(data.videosData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
console.log(videosData);
  return (
    <>
        <Carouselpage />
        <VideoPage videosData={videosData}/>
    </>
  )
}

export default App
