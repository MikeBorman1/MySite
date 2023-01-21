import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselContainer = ({ playlistId, apiKey }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=50`
      )
      .then((res) => setVideos(res.data.items.slice(-5).reverse()))
  }, [playlistId, apiKey])

  return (
    <div className="  mt-6 h-full">
      <div>
        <div>
          <Carousel showThumbs={true} showArrows={true} dynamicHeight={true}>
            {videos.map((video, index) => (
              <div key={index} className="">
                <iframe
                  title={video.snippet.title}
                  height="500"
                  src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default CarouselContainer
