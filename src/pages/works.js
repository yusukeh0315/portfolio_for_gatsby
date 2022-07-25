import React, { useState } from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { motion } from "framer-motion"
import Modal from "../components/modal"
import Card from "../components/card"

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

                  <div className="p-cards-works__item card-works" key={node.id}><motion.a onClick={() => handleOpenModal(index)} className="c-card-works__link js-modal__open" href data-target="modal01">
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

            return (
              <Modal modalIsOpen={modalIsOpen === index} onClose={() => setIsOpen(false)}>
                <Card node={node} />
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
    allMicrocmsWorks(sort: {fields: workId, order: ASC}) {
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
