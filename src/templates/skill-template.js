import React, { useState } from 'react'
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { motion } from "framer-motion"
import Modal from "../components/modal"
import Card from "../components/card"

import { ImgixGatsbyImage } from "@imgix/gatsby"

const Skills = ({ data, location, pageContext }) => {

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
                <h2 className="p-section__title p-section__title--skill js_typing">
                { pageContext.skillicon &&
                  <div className="c-card-skills__logo-wrapper">
                    <img className="c-card-skills__logo" src={pageContext.skillicon} alt="画像：ロゴ" />
                  </div>
                }
                {pageContext.skillname}
                </h2>
                <p className="c-card-skills__text">{pageContext.skilldesc}</p>
              </div>

              <div className="p-cards-works p-cards-works--col3">
                {data.allMicrocmsWorks.edges.map(({ node }, index) => (

                  <div className="p-cards-works__item card-works" key={node.id}>
                    <motion.a onClick={() => handleOpenModal(index)} className="c-card-works__link js-modal__open" href data-target="modal01">
                      <figure className="c-card-works__img-wrapper">
                        <ImgixGatsbyImage
                          src={node.thumbnail.url}
                          imgixParams={{ aut: ["format", "compress"]}}
                          layout="constrained"
                          width={319}
                          sourceWidth={node.thumbnail.width}
                          sourceHeight={node.thumbnail.height}
                          style={{ height: "100%" }}
                          className="c-card-works__img"
                          alt="写真：実績"
                        />
                      </figure>
                    </motion.a>
                    <div className="c-card-works__body">
                      <p className="c-card-works__title">{node.title} </p>

                      <p className="c-card-works__text">
                        {node.skills.map( skill => (
                          <Link className="c-card-works__skill" to={`/skills/${skill.categorySlug}`}>{skill.category} </Link>
                          // <span>{skill.category} </span>
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
  query($skillid: String!) {
    allMicrocmsWorks(
      sort: {fields: workId, order: ASC}
      filter: {skills: {elemMatch: {id: {eq: $skillid }}}}
      ) {
      edges {
        node {
          id
          title
          skills {
            category
            categorySlug
          }
          content
          period
          thumbnail {
            url
            width
            height
          }
          image01 {
            url
            width
            height
          }
          image02 {
            url
            width
            height
          }
          image03 {
            url
            width
            height
          }
          image04 {
            url
            width
            height
          }
          site_url
        }
      }
    }

  }
`

export default Skills
