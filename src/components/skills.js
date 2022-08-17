import React from "react"
import { Link } from "gatsby"

const Skills = ({ data, category_link=true }) => {
  const skillCardContent = (node, level_star) => {
    return (
      <>
        {node.skillIcon && (
          <div className="c-card-skills__logo-wrapper">
            <img
              className="c-card-skills__logo"
              src={node.skillIcon.url}
              alt="SkillIcon"
            />
          </div>
        )}
        <div className="c-card-skills__body">
          <p className="c-card-skills__title">{node.category}</p>
          <p className="c-card-skills__point">{level_star}</p>
          <p className="c-card-skills__text">{node.skillDesc}</p>
        </div>
      </>
    )
  }

  const skillCardContentLink = (node, level_star) => {
    if (
      node.categorySlug === "git" ||
      node.categorySlug === "infra" ||
      category_link === false
    ) {
      return (
        <>
          <div className="c-card-skills__nolink">
            {skillCardContent(node, level_star)}
          </div>
        </>
      )
    } else {
      return (
        <>
          <Link className="c-card-skills" to={`/skills/${node.categorySlug}`}>
            {skillCardContent(node, level_star)}
          </Link>
        </>
      )
    }
  }

  return (
    <section className="l-skills">
      <div className="l-skills__inner">
        <div className="p-section__title-wrapper">
          <h2 className="p-section__title js_typing">Skills</h2>
        </div>
        {/* /.section__title-wrapper*/}
        <div className="p-skills__lead-wrapper">
          <p className="p-skills__lead">スキルレベルの目安は次の通りです。</p>
          <table className="p-skill-table">
            <tr>
              <td className="p-skill-table__1col">1:</td>
              <td>知識がある、軽く使用した程度</td>
            </tr>
            <tr>
              <td className="p-skill-table__1col">2:</td>
              <td>実務レベルで使用できるがもう少し習熟が必要</td>
            </tr>
            <tr>
              <td className="p-skill-table__1col">3:</td>
              <td>実務レベルの実装が可能</td>
            </tr>
            <tr>
              <td className="p-skill-table__1col">4:</td>
              <td>既存実務をカスタマイズして実装が可能</td>
            </tr>
            <tr>
              <td className="p-skill-table__1col">5:</td>
              <td>経験を体系化し先進的なやり方を工夫・開発が可能</td>
            </tr>
          </table>
        </div>
        {/* /.skills__lead-wrapper*/}
        <div className="p-cards-skills p-cards-skills--col2">
          {data.allMicrocmsSkills.edges.map(({ node }) => {
            var level_star

            if (!(node.skillIcon && node.skillLevel && node.skillDesc)) {
              return null
            }

            if (node.skillLevel > 0 && node.skillLevel <= 5) {
              if (node.skillLevel === 1) {
                level_star = (
                  <div>
                    <span className="point-on">★</span>
                    <span className="point-off">★★★★</span>
                  </div>
                )
              }
              if (node.skillLevel === 2) {
                level_star = (
                  <div>
                    <span className="point-on">★★</span>
                    <span className="point-off">★★★</span>
                  </div>
                )
              }
              if (node.skillLevel === 3) {
                level_star = (
                  <div>
                    <span className="point-on">★★★</span>
                    <span className="point-off">★★</span>
                  </div>
                )
              }
              if (node.skillLevel === 4) {
                level_star = (
                  <div>
                    <span className="point-on">★★★★</span>
                    <span className="point-off">★</span>
                  </div>
                )
              }
              if (node.skillLevel === 5) {
                level_star = (
                  <div>
                    <span className="point-on">★★★★★</span>
                    <span className="point-off"></span>
                  </div>
                )
              }
            }

            return (
              <div className="p-cards-skills__item">
                {skillCardContentLink(node, level_star)}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
