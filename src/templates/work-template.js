import { graphql, Link } from "gatsby"
import React, { useLayoutEffect, useState } from "react"

import { ImgixGatsbyImage } from "@imgix/gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { convert } from "html-to-text"
import SwiperCore, {
  Autoplay,
  EffectFade,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs
} from "swiper"
import "swiper/css"
import "swiper/css/effect-fade"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"

SwiperCore.use([Pagination, Autoplay])

const Work = ({ data, location, category_link = true }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [display, setDisplay] = useState("none")

  let url, inner_class_name, first_image, is_single_page

  if (
    data.microcmsWorks.image02 &&
    data.microcmsWorks.image03 &&
    data.microcmsWorks.image04
  ) {
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

  const thumbnailImages = [
    first_image,
    data.microcmsWorks.image02,
    data.microcmsWorks.image03,
    data.microcmsWorks.image04,
  ]

  const page_name = data.site.siteMetadata.title.match(/Portfolio/)
    ? "crowdsourcing_works"
    : "works"

  const params = {
    noSwiping: true,
    effect: "fade",
    simulateTouch: false,
    fadeEffect: {
      crossFade: true,
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
    modules: [FreeMode, Navigation, Thumbs, EffectFade],
  }

  let thumbsParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    watchSlidesProgress: true,
    modules: [FreeMode, Navigation, Thumbs],
  }

  useLayoutEffect(() => {
    setDisplay("display")
  }, [setDisplay])

  return (
    <div>
      <Layout page={page_name}>
        <Seo
          pagetitle={data.microcmsWorks.title}
          pagedesc={`${convert(data.microcmsWorks.content, {
            selectors: [
              { selector: "a", options: { ignoreHref: true } },
              { selector: "img", format: "skip" },
            ],
          }).slice(0, 70)}…`}
          pagepath={location.pathname}
        />

        <section className="l-work">
          <div className="l-work__inner">
            <div className={inner_class_name}>
              <div className="c-modal__images">
                <ul
                  className="p-swiper-main__wrapper"
                  style={{ display: display }}
                >
                  <a
                    className="c-modal__img-wrapper"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={url}
                  >
                    <Swiper {...params}>
                      {thumbnailImages.map(image => {
                        if (image === null) {
                          return null
                        }
                        return (
                          <SwiperSlide>
                            <li className="p-swiper-main__slide">
                              <ImgixGatsbyImage
                                src={image.url}
                                imgixParams={{ auto: ["format", "compress"] }}
                                layout="fixed"
                                width={740}
                                sourceWidth={image.width}
                                sourceHeight={image.height}
                                className="p-swiper-main__image"
                                alt="MainImage"
                              />
                            </li>
                          </SwiperSlide>
                        )
                      })}
                    </Swiper>
                  </a>
                </ul>
                <ul
                  className="p-swiper-thumb__wrapper"
                  style={{ display: display }}
                >
                  <Swiper {...thumbsParams}>
                    {!is_single_page &&
                      thumbnailImages.map(image => {
                        return (
                          <SwiperSlide>
                            <li className="p-swiper-thumb__slide">
                              <ImgixGatsbyImage
                                src={image.url}
                                imgixParams={{ auto: ["format", "compress"] }}
                                layout="fixed"
                                width={740}
                                sourceWidth={image.width}
                                sourceHeight={image.height}
                                className="p-swiper-thumb__image"
                                alt="MainImage"
                              />
                            </li>
                          </SwiperSlide>
                        )
                      })}
                  </Swiper>
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
  query ($slug: String!) {
    microcmsWorks(slug: { eq: $slug }) {
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
    site {
      siteMetadata {
        title
        lang
        description
        siteUrl
        local
        fbappid
      }
    }
  }
`

export default Work
