const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions


    const blogresult = await graphql(`
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

    if (blogresult.errors) {
        reporter.panicOnBuild(`GraphQL のクエリでエラーが発生しました`)
        return
    }

    blogresult.data.allMicrocmsSkills.edges.forEach(
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
