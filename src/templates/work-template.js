import React, { useState } from "react"
import { graphql, Link } from "gatsby"

import { ImgixGatsbyImage } from "@imgix/gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPost = ({ data, location, category_link = true }) => {
  let url, inner_class_name, first_image, is_single_page

  if (data.microcmsWorks.image02 && data.microcmsWorks.image03 && data.microcmsWorks.image04) {
    inner_class_name = "c-modal__inner"
    first_image = data.microcmsWorks.image01
    is_single_page = false
  } else {
    inner_class_name = "c-modal__inner c-modal__inner--single-page"
    first_image = data.microcmsWorks.image01
    is_single_page = true
  }

  if (data.microcmsWorks.site_url) {
    url = data.microcmsWorks.site_url
  }

  const [srcUrl, setSrcUrl] = useState(data.microcmsWorks.image01)

  const changeMainImage = imgUrl => {
    setSrcUrl(imgUrl)
  }

  const thumbnailImages = [
    first_image,
    data.microcmsWorks.image02,
    data.microcmsWorks.image03,
    data.microcmsWorks.image04,
  ]

  return (
    <div>
      <Layout page="works">
        <Seo
          pagetitle="Works"
          pagedesc="事業実績など"
          pagepath={location.pathname}
        />

        <section className="l-work">
          <div className="l-work__inner">
            <div className={inner_class_name}>
              <div className="c-modal__images">
                <a
                  className="c-modal__img-wrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}
                >
                  {thumbnailImages.map(image => {
                    if (image === null) {
                      return null
                    }
                    return (
                      <>
                        <ImgixGatsbyImage
                          src={image.url}
                          imgixParams={{ auto: ["format", "compress"] }}
                          layout="fixed"
                          width={740}
                          sourceWidth={image.width}
                          sourceHeight={image.height}
                          style={{
                            height: "100%",
                            transition: "0.5s",
                            opacity: "0.0",
                            zIndex: "10",
                          }}
                          className="c-modal__img"
                          alt="MainImage"
                        />
                        <ImgixGatsbyImage
                          src={image.url}
                          imgixParams={{ auto: ["format", "compress"] }}
                          layout="fixed"
                          width={740}
                          sourceWidth={image.width}
                          sourceHeight={image.height}
                          style={{
                            height: "100%",
                            transition: "0.5s",
                            opacity: image.url === srcUrl.url ? "1.0" : "0.0",
                            zIndex: image.url === srcUrl.url ? "20" : "10",
                          }}
                          className="c-modal__img"
                          alt="MainImage"
                        />
                      </>
                    )
                  })}
                </a>
                <ul className="c-modal__thumbs-list">
                  {!is_single_page &&
                    thumbnailImages.map(image => {
                      return (
                        <button
                          className="c-modal__thumb-wrapper"
                          onKeyDown={() => changeMainImage(image)}
                          onClick={() => changeMainImage(image)}
                        >
                          <ImgixGatsbyImage
                            src={image.url}
                            imgixParams={{ auto: ["format", "compress"] }}
                            layout="constrained"
                            width={740}
                            sourceWidth={image.width}
                            sourceHeight={image.height}
                            style={{ height: "100%" }}
                            className="c-modal__thumb"
                            alt="Thumbnail"
                          />
                        </button>
                      )
                    })}
                </ul>
              </div>
              <div className="c-modal__body">
                <h3 className="c-modal__title">{data.microcmsWorks.title}</h3>
                <p className="c-modal__item">
                  使用言語など：
                  {data.microcmsWorks.skills.map(skill => (
                    <>
                      {category_link ? (
                        <Link
                          className="c-skill-lable"
                          to={`/skills/${skill.categorySlug}`}
                        >
                          {skill.category}{" "}
                        </Link>
                      ) : (
                        <div className="c-skill-lable--nolink">
                          {skill.category}{" "}
                        </div>
                      )}
                    </>
                  ))}
                </p>
                <p className="c-modal__item">
                  実装期間： {data.microcmsWorks.period}
                </p>
                <p className="c-modal__text">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.microcmsWorks.content,
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    microcmsWorks(id: { eq: $id }) {
      title
      content
      id
      site_url
      skills {
        category
        categorySlug
      }
      period
      thumbnail {
        height
        url
        width
      }
      image01 {
        height
        url
        width
      }
      image02 {
        height
        width
        url
      }
      image03 {
        height
        width
        url
      }
      image04 {
        height
        url
        width
      }
    }
  }
`

export default BlogPost
