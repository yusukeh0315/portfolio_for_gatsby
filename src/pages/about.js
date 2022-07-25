import React from "react"
import { graphql, Link } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {

  const skillCardContent = (node, level_star) => {
    return (
      <>
      { node.skillIcon &&
        <div className="c-card-skills__logo-wrapper"><img className="c-card-skills__logo" src={node.skillIcon.url} alt="画像：ロゴ" /></div>
      }
      <div className="c-card-skills__body">
        <p className="c-card-skills__title">{node.category}</p>
        <p className="c-card-skills__point">
          {level_star}
        </p>
        <p className="c-card-skills__text">{node.skillDesc}</p>
      </div>
      </>
    );
  }

  const skillCardContentLink = (node, level_star) => {

    if ( node.categorySlug === 'git' || node.categorySlug ==='infra' ) {
      return (
        <>
          {skillCardContent(node, level_star)}
        </>
      )
    } else {
      return (
        <>
          <Link to={`/skills/${node.categorySlug}`}>
            {skillCardContent(node, level_star)}
          </Link>
        </>
      )
    }
  }

  return (
    <div>
      <Layout>
        <Seo
          pagetitle="About"
          pagedesc="エンジニアの略歴、スキル"
          pagepath={location.pathname}
        />

        <section className="l-about">
          <div className="l-about__inner">
            <div className="p-section__title-wrapper">
              <h2 className="p-section__title js_typing">About</h2>
            </div>
            {/* /.section__title-wrapper*/}
            <div className="p-career">
              <p className="p-career__text">
                高専で電子制御工学、大学で経営情報工学を学んだのち、大手メーカーにてSEとして従事。コーディングや、インフラ、プロジェクトマネジメントまで幅広く担当。
                2022年に退社し、ITエンジニアとしてフリーランスに転向。
              </p>
            </div>
            {/* /.career*/}
            <div className="p-profile">
              <p className="p-profile__name">HASEGAWA</p>
              <p className="p-profile__address">所在地： 千葉県</p>
              <p className="p-profile__business_dsc">事業内容： Webデザイン、HTML・CSSコーディング、WordPress導入、PythonやPower Automate Desktop、Ui Pathなどによる業務支援、効率化など</p>
            </div>
            {/* /.profile*/}
            {/* /.about_inner*/}
          </div>
        </section>
        <section className="l-skills">
          <div className="l-skills__inner">
            <div className="p-section__title-wrapper">
              <h2 className="p-section__title js_typing">Skills</h2>
            </div>
            {/* /.section__title-wrapper*/}
            <div className="p-skills__lead-wrapper">
              <p className="p-skills__lead">スキルレベルの目安は次の通りです。</p>
              <ul>
                <li><span className="num">1:</span>知識がある、軽く使用した程度</li>
                <li><span className="num">2:</span>実務レベルで使用できるがもう少し習熟が必要</li>
                <li><span className="num">3:</span>実務レベルの実装が可能</li>
                <li><span className="num">4:</span>既存実務をカスタマイズして実装が可能</li>
                <li><span className="num">5:</span>経験を体系化し先進的なやり方を工夫・開発が可能</li>
              </ul>
            </div>
            {/* /.skills__lead-wrapper*/}
            <div className="p-cards-skills p-cards-skills--col2">

            {data.allMicrocmsSkills.edges.map(({ node }) => {

              var level_star

              if (!(node.skillIcon && node.skillLevel && node.skillDesc)) {
                return null;
              }

              if (node.skillLevel > 0 && node.skillLevel <= 5) {
                if (node.skillLevel === 1) {
                  level_star = <div><span className="point-on">★</span><span className="point-off">★★★★</span></div>
                }
                if (node.skillLevel === 2) {
                  level_star = <div><span className="point-on">★★</span><span className="point-off">★★★</span></div>
                }
                if (node.skillLevel === 3) {
                  level_star = <div><span className="point-on">★★★</span><span className="point-off">★★</span></div>
                }
                if (node.skillLevel === 4) {
                  level_star = <div><span className="point-on">★★★★</span><span className="point-off">★</span></div>
                }
                if (node.skillLevel === 5) {
                  level_star = <div><span className="point-on">★★★★★</span><span className="point-off"></span></div>
                }
              }


              return (

                <div className="p-cards-skills__item c-card-skills">
                  {skillCardContentLink(node, level_star)}
                </div>
              )
            })}

            </div>
          </div>
        </section>

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
