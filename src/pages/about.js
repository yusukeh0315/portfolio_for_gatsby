import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Skills from "../components/skills"
import Profile from "../components/profile"

const About = ({ data, location }) => {

  return (
    <div>
      <Layout page='about'>
        <Seo
          pagetitle="About"
          pagedesc="エンジニアの略歴、スキル"
          pagepath={location.pathname}
        />

        <Profile />

        <Skills data={data} />

      </Layout>
    </div>

  )
}

export const query = graphql`
  query {
    allMicrocmsSkills(sort: {fields: skillId, order: ASC}) {
      edges {
        node {
          category
          categorySlug
          skillIcon {
            url
          }
          skillDesc
          skillLevel
        }
      }
    }
  }
`

export default About
