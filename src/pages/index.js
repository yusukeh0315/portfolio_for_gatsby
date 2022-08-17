import React, { useCallback, useState } from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Modal from "../components/modal"
import Card from "../components/card"
import WorksPanel from "../components/workspanel"
import Service from "../components/service"
import FirstView from "../components/firstview"

import { useBodyScrollLock } from '../hooks/body_scroll_lock'

const Home = ({ data }) => {

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
      <Layout page="index">
        <Seo />

        <FirstView />

        <Service />

        <section className="l-main-works">
          <div className="l-main-works__inner">
            <div className="p-section__title-wrapper">
              <h2 className="p-section__title js_typing">Works</h2>
            </div>

            <WorksPanel
              data={data}
              handleOpenModal={handleOpenModal}
              is_home={true}
              is_crowdsourcing={false}
            />
          </div>
        </section>
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
  query {
    allMicrocmsWorks(sort: { fields: workId, order: ASC }, skip: 0, limit: 7) {
      edges {
        node {
          id
          title
          display
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

export default Home
