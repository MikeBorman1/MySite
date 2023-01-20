import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselContainer = ({ playlistId, apiKey }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`
      )
      .then((res) => setVideos(res.data.items))
  }, [playlistId, apiKey])

  const lastFiveVideos = videos.reverse()

  return (
    <div className="relative px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 ">
      <div className="absolute top-0 left-0 right-0">
        <div className="relative h-1/3 sm:h-2/3">
          <Carousel
            showThumbs={false}
            showArrows={true}
            className="border-t-100 rounded-md  border-2 border-teal-400"
          >
            {lastFiveVideos.map((video, index) => (
              <div key={index}>
                <iframe
                  title={video.snippet.title}
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
                  frameBorder="0"
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
