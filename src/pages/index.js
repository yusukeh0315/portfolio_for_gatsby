import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import WorksPanel from "../components/workspanel"
import Service from "../components/service"
import FirstView from "../components/firstview"

const Home = ({ data }) => {

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
              is_home={true}
              is_crowdsourcing={false}
            />
          </div>
        </section>
      </Layout>
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
          slug
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
