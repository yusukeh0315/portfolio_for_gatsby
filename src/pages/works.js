import React, { useState } from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { motion } from "framer-motion"
import Modal from "../components/modal"

const Works = ({ data, location }) => {

  // モーダルの表示状態と切り替える為にState(props)を準備
  // false = 非表示、数値 = 表示しているModalの番目とする
  const [modalIsOpen, setIsOpen] = useState(false);

  //どのモーダルを表示するのか操作するために関数を準備
  const handleOpenModal = (num) => {
      setIsOpen(num)
  }

  return (
    <div>
      <Layout>
        <Seo
          pagetitle="Works"
          pagedesc="事業実績など"
          pagepath={location.pathname}
        />

        <div>
          <section className="l-works">
            <div className="l-works__inner">
              <div className="p-section__title-wrapper">
                <h2 className="p-section__title js_typing">Works</h2>
              </div>

              <div className="p-cards-works p-cards-works--col3">
                {data.allMicrocmsWorks.edges.map(({ node }, index) => (

                  <div className="p-cards-works__item card" key={node.id}><motion.a onClick={() => handleOpenModal(index)} className="c-card-works__link js-modal__open" href data-target="modal01">
                    <figure className="c-card-works__img-wrapper"><img className="c-card-works__img" alt="写真：実績" src={node.thumbnail.url} /></figure></motion.a>
                    <div className="c-card-works__body">
                      <p className="c-card-works__title">{node.title} </p>

                      <p className="c-card-works__text">
                        {node.skills.map( skill => (
                          <span>{skill.category} </span>
                        ))}
                      </p>

                    </div>
                  </div>

                ))}

              </div>
            </div>
          </section>

          {/* modal*/}
          {data.allMicrocmsWorks.edges.map(({ node }, index) => {

            var url, inner_class_name, top_image

            if (node.image01 && node.image02 && node.image03 && node.image04) {
              inner_class_name = "c-modal__inner"
              top_image = node.image01.url
            } else {
              inner_class_name = "c-modal__inner c-modal__inner--single-page"
              top_image = node.thumbnail.url
            }

            if (node.site_url){
              url = node.site_url
            }

            return (
            <Modal modalIsOpen={modalIsOpen === index} onClose={() => setIsOpen(false)}>
              <div className={inner_class_name}>
                <div className="c-modal__images">
                  <a className="c-modal__img-wrapper" target="_blank" rel="noopener noreferrer" href={url}><img className="c-modal__img" id="bigimg" alt="写真：実績" src={top_image} /></a>
                  <ul className="c-modal__thumbs-list">

                    { node.image01 &&
                      <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src={node.image01.url} alt="サムネイル" data-image={node.image01.url} /></li>
                    }

                    { node.image02 &&
                      <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src={node.image02.url} alt="サムネイル" data-image={node.image02.url} /></li>
                    }

                    { node.image03 &&
                      <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src={node.image03.url} alt="サムネイル" data-image={node.image03.url} /></li>
                    }

                    { node.image04 &&
                      <li className="c-modal__thumb-wrapper"><img className="c-modal__thumb" src={node.image04.url} alt="サムネイル" data-image={node.image04.url} /></li>
                    }

                  </ul>
                </div>

                <div className="c-modal__body">
                  <h3 className="c-modal__title">{node.title}</h3>
                  <p className="c-modal__item">使用言語など：

                    {node.skills.map( skill => (
                      <span>{skill.category} </span>
                    ))}

                  </p>
                  <p className="c-modal__item">実装期間： {node.period}</p>
                  <p className="c-modal__text">
                    {node.desc}
                  </p><a className="js-modal__close c-modal__close" href><span>×</span></a>
                </div>
              </div>
            </Modal>
            )
          })}

        </div>

      </Layout>

    </div>

  )
}

export const query = graphql`
  query {
    allMicrocmsWorks {
      edges {
        node {
          id
          title
          skills {
            category
            categorySlug
          }
          desc
          period
          thumbnail {
            url
          }
          image01 {
            url
          }
          image02 {
            url
          }
          image03 {
            url
          }
          image04 {
            url
          }
          site_url
        }
      }
    }
  }
`

export default Works
