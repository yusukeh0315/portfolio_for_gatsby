import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import WorksPanel from "../components/workspanel"

const Works = ({ data, location }) => {

  return (
    <div>
      <Layout page="works">
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

              <WorksPanel
                data={data}
                is_home={false}
                is_crowdsourcing={false}
              />
            </div>
          </section>
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

export default Works
