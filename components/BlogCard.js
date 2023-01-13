import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function BlogPostCard(props) {
  const { title, slug, imageslug } = props

  return (
    <Link href={`/blog/${slug}`}>
      <a
        style={{ height: '350px' }}
        className="block flex flex-col justify-between rounded-md border-2 border-teal-400 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
      >
        <img
          className="h-48 w-full rounded-t-md object-cover"
          src={imageslug}
          alt="blog post cover"
        />
        <span className="p-4 text-2xl text-white">{title}</span>
      </a>
    </Link>
  )
}

export default BlogPostCard
