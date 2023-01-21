import * as React from 'react'
import { SocialIconRow } from '@/components/social-icons'
import BlogPostCard from '@/components/BlogCard'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import CarouselContainer from '@/components/YoutubeCarousele'

export default function MyComponent(props) {
  return (
    <>
      <div className="container mx-auto flex flex-col">
        <div className="container mx-auto flex">
          <div className="w-1/2 pr-4">
            <div className="text-4xl font-bold">Mike Borman</div>
            <div className="mt-2 text-lg">Writer, Content Creator and Developer on Cardano</div>
          </div>
          <div className="flex w-1/2 flex-col justify-center">
            <div className="max-w-48 mx-auto my-auto max-h-48">
              <Image
                src="/images/myfaceppgray.png"
                alt="Picture of the author"
                className="max-w-48 max-h-48"
                width="150"
                height="150"
                unoptimized={true}
              />
            </div>
            <div className="mt-4">
              <SocialIconRow className="social-icon-row" />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-3xl font-bold">Featured Blogs</div>
          <div className="align-items-stretch mt-4 grid h-full grid-cols-3 gap-4">
            <div className="row-auto h-full">
              <BlogPostCard
                title="The Hydra Protocol Family — Scaling and Network Optimization for the Cardano Blockchain"
                slug="the-hydra-protocol-family-scaling-and-network-optimization-for-the-cardano-blockchain"
                imageslug="/images/hydra.png"
                className="blog-post-card"
              />
            </div>
            <div className="row-auto h-full">
              <BlogPostCard
                title="Ouroboros, A deep dive for non PhDs"
                slug="ouroboros-a-deep-dive-for-non-phd"
                imageslug="/images/ourobouros.png"
                className="blog-post-card"
              />
            </div>
            <div className="row-auto h-full">
              <BlogPostCard
                title="The Extensive guide on EUTxO, UTxO and the accounts-based model"
                slug="the-extensive-guide-on-eutxo-utxo-and-the-accounts-based-model"
                imageslug="/images/eutxo.jpg"
                className="blog-post-card"
              />
            </div>
          </div>
          <div className="mt-6 flex h-6 items-center rounded-lg leading-7 text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
            <Link href="/blog">
              <a>
                {'Read all posts'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="ml-1 h-6 w-6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                  />
                </svg>
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-36 text-3xl font-bold">Latest Cardano Explored Episodes</div>
        <div className="">
          <div className="mt-5 h-full">
            <CarouselContainer
              playlistId="PL67adn4YrG9lToXrvpxBpIuUU9YSiOQNQ"
              apiKey={process.env.NEXT_PUBLIC_GOOGLE}
            />
          </div>
        </div>
        <div className=" flex  h-6 items-center rounded-lg leading-7 text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
          <Link href="/videos">
            <a>
              {'Watch all Videos'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="ml-1 h-6 w-6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
