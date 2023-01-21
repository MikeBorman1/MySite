import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'

const Videos = () => {
  const [videos, setVideos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const playlistId = 'PL67adn4YrG9lToXrvpxBpIuUU9YSiOQNQ'
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}&maxResults=50`
      )
      .then((res) => {
        setVideos(res.data.items)
      })
  }, [playlistId, apiKey])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredVideos = videos.filter((video) =>
    video.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto p-6">
      <div className="my-4 flex">
        <div className="mx-auto flex w-1/2 flex-col">
          <div className="mb-4 text-3xl font-bold">Cardano Explored</div>
          <div className="text-base">
            Cardano Explored is your go-to podcast for all things Cardano. Join us as we delve into
            the fascinating world of this cutting-edge blockchain and its ecosystem. Each week, we
            sit down with experts in the field to bring you the latest developments, challenges, and
            opportunities in the Cardano community. Whether you're a blockchain enthusiast or just
            getting started, our conversations will give you a deeper understanding of this exciting
            project and its potential.
          </div>
        </div>
        <div className="mx-auto flex w-1/2 flex-col items-center justify-center text-center">
          <Link href={`https://www.youtube.com/playlist?list=${playlistId}`}>
            <a className="text-teal-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="ml-1 h-20 w-20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
              Watch on YouTube
            </a>
          </Link>
        </div>
      </div>

      <div className="my-4">
        <input
          className="focus:shadow-outline-teal rounded-md border py-2 px-3 leading-4 text-gray-700 placeholder-gray-500 focus:border-teal-300 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
          type="text"
          placeholder="Search videos"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="md:grid-col 2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredVideos.map((video, index) => (
          <div key={index} className="overflow-hidden rounded-md shadow-md">
            <iframe
              title={video.snippet.title}
              width="100%"
              height="200"
              src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <div className="text-lg font-medium">{video.snippet.title}</div>
              <div className="text-gray-600">{video.snippet.publishedAt}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos
