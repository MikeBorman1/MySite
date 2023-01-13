import React from 'react'
import Link from 'next/link'
import { Builder } from '@builder.io/react'

function BlogPostCard(props) {
  const { title, slug } = props

  return (
    <Link href={`/blog/${slug}`}>
      <a className="block transform rounded-md border-2 border-teal-400  p-4 text-3xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
        {title}
      </a>
    </Link>
  )
}

export default BlogPostCard

Builder.registerComponent(BlogPostCard, {
  name: 'BlogPostCard',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'I am a React component!' },
    {
      name: 'link',
      type: 'string',
      defaultValue: '/404',
    },
  ],
})
