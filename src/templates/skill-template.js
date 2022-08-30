import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import WorksPanel from "../components/workspanel"

const Skills = ({ data, location, pageContext }) => {

  return (
    <div>
      <Layout page="works">
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
          display
        }
      }
    }

  }
`

export default Skills
