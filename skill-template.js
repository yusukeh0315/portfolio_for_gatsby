import React, { useState, useCallback } from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Modal from "../components/modal"
import Card from "../components/card"
import WorksPanel from "../components/workspanel"

import { useBodyScrollLock } from '../hooks/body_scroll_lock'

const Skills = ({ data, location, pageContext }) => {

  // モーダルの表示状態と切り替える為にState(props)を準備
  // false = 非表示、数値 = 表示しているModalの番目とする
  const [modalIsOpen, setIsOpen] = useState(false);

  //どのモーダルを表示するのか操作するために関数を準備
  const handleOpenModal = useCallback((num) => {
    setIsOpen(num);
  }, []);

  useBodyScrollLock({modalIsOpen});

  return (
    <div>
      <Layout>
        <Seo
          pagetitle={pageContext.skillname}
          pagedesc={`${pageContext.skillname}のレベルと実績について`}
          pagepath={location.pathname}
        />

        <div>
          <section className="l-works">
            <div className="l-works__inner">
              <div className="p-section__title-wrapper">
                <h2 className="p-section__title p-section__title--skill js_typing">
                  {pageContext.skillicon && (
                    <div className="c-card-skills__logo-wrapper c-card-skills__logo-wrapper--skill">
                      <img
                        className="c-card-skills__logo"
                        src={pageContext.skillicon}
                        alt="SkillIcon"
                      />
                    </div>
                  )}
                  {pageContext.skillname}
                </h2>
                <p className="c-card-skills__text">{pageContext.skilldesc}</p>
              </div>

              <WorksPanel
                data={data}
                handleOpenModal={handleOpenModal}
                is_home={false}
                is_crowdsourcing={false}
              />
            </div>
          </section>
        </div>
      </Layout>

      {/* modal*/}
      {data.allMicrocmsWorks.edges.map(({ node }, index) => {
        return (
          <Modal
            modalIsOpen={modalIsOpen === index}
            onClose={() => setIsOpen(false)}
          >
            <Card node={node} />
          </Modal>
        )
      })}
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
