const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions


    const skillresult = await graphql(`
        query {
            allMicrocmsSkills {
                edges {
                    node {
                        category
                        categorySlug
                        skillsId
                        skillIcon {
                            url
                        }
                        skillDesc
                    }
                }
            }
        }
    `)

    if (skillresult.errors) {
        reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
        return
    }

    const workresult = await graphql(`
      query {
        allMicrocmsWorks {
          edges {
            node {
              id
              image01 {
                height
                url
                width
              }
              image02 {
                height
                url
                width
              }
              content
              image03 {
                height
                url
                width
              }
              image04 {
                height
                url
                width
              }
              period
              site_url
              skills {
                category
                categorySlug
              }
              thumbnail {
                height
                url
                width
              }
              title
            }
          }
        }
      }
    `)

    if (workresult.errors) {
      reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
      return
    }

    workresult.data.allMicrocmsWorks.edges.forEach(({ node }) => {
      createPage({
        path: `/works/${node.id}/`,
        component: path.resolve(`./src/templates/work-template.js`),
        context: {
          id: node.id,
        },
      })
    })

    skillresult.data.allMicrocmsSkills.edges.forEach(
        ({ node }) => {
            // TODO 対象外はcategoryに所属するWorksが1つもない場合にnullを返す処理に変更
            if (node.categorySlug === "git" || node.categorySlug === "infra"){
                return null;
            }

            if (node.categorySlug === "desgin"){
                contextContent = {
                    skillid: node.skillsId,
                    skillname: node.category,
                    skilldesc: node.skillDesc
                }
            } else {
                contextContent = {
                    skillid: node.skillsId,
                    skillname: node.category,
                    skillicon: node.skillIcon.url,
                    skilldesc: node.skillDesc
                }
            }
            createPage({
                path: `/skills/${node.categorySlug}/`,
                component: path.resolve(`./src/templates/skill-template.js`),
                context: contextContent,
            })
            }
        )
}
