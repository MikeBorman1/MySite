import * as React from 'react'
import { SocialIconRow } from '@/components/social-icons'
import BlogPostCard from '@/components/BlogCard'
import Image from 'next/image'

export default function MyComponent(props) {
  return (
    <>
      <div className="div">
        <div className="builder-columns div-2">
          <div className="builder-column column">
            <div className="div-3">
              <p>
                <strong>
                  Mike Borman<span className="ql-cursor"></span>
                </strong>
              </p>
            </div>
            <div className="div-4">
              <p>Writer, Content Creator and Developer on Cardano</p>
            </div>
          </div>
          <div className="builder-column column-2">
            <div className="div-5">
              <Image
                src="/images/myfacepp.png"
                alt="Picture of the author"
                width="100"
                height="180"
                unoptimized={true}
              />

              <div className="builder-image-sizer image-sizer" />
            </div>
            <SocialIconRow className="social-icon-row" />
          </div>
        </div>
      </div>
      <div className="div-6">
        <p>
          <strong>Featured Blogs</strong>
        </p>
      </div>
      <div className="div-7">
        <div className="builder-columns div-8">
          <div className="builder-column column-3">
            <BlogPostCard
              title="deriving-ols-estimator"
              slug="deriving-ols-estimator"
              className="blog-post-card"
            />
          </div>
          <div className="builder-column column-4">
            <BlogPostCard
              title="Ouroboros, A deep dive for non PhDs"
              slug="ouroboros-a-deep-dive-for-non-phd"
              className="blog-post-card-2"
            />
          </div>
          <div className="builder-column column-5">
            <BlogPostCard
              title="I am a React component!"
              slug="/404"
              className="blog-post-card-3"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
        }
        .div-2 {
          display: flex;
        }
        @media (max-width: 999px) {
          .div-2 {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(58.333% - 10px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column {
            width: 100%;
          }
        }
        .div-3 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          line-height: normal;
          height: auto;
          font-size: 50px;
          padding-left: 60px;
          padding-right: 0px;
          margin-right: -4px;
        }
        @media (max-width: 991px) {
          .div-3 {
            padding-left: 131px;
          }
        }
        .div-4 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 3px;
          line-height: normal;
          height: auto;
          padding-left: 60px;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(41.667% - 10px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-5 {
          display: flex;
          flex-direction: column;
          position: relative;
          width: 100%;
          min-height: 20px;
          min-width: 20px;
          overflow: hidden;
          max-width: 177px;
          margin-left: auto;
          margin-top: auto;
          margin-right: auto;
        }
        .image {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 100%;
          pointer-events: none;
          font-size: 0;
        }
        .social-icon-row {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
        }
        .div-6 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          line-height: normal;
          height: auto;
          font-size: 38px;
          padding-left: 60px;
        }
        .div-7 {
          margin-left: 60px;
        }
        .div-8 {
          display: flex;
        }
        @media (max-width: 999px) {
          .div-8 {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(33.333333333333336% - 13.333333333333334px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column-3 {
            width: 100%;
          }
        }
        .blog-post-card {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
          padding-left: 0px;
        }
        .column-4 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(33.333333333333336% - 13.333333333333334px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-4 {
            width: 100%;
          }
        }
        .blog-post-card-2 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
        }
        .column-5 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(33.333333333333336% - 13.333333333333334px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-5 {
            width: 100%;
          }
        }
        .blog-post-card-3 {
          display: flex;
          flex-direction: column;
          position: relative;
          margin-top: 20px;
        }
      `}</style>
    </>
  )
}
