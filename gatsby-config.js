/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

//環境変数を使うために必要
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `VIT Works`,
    description: `ITを活用した様々なソリューションを提供するVIT Worksのサイト`,
    lang: `ja`,
    siteUrl: `https://vitdata.net/`,
    local: `ja_JP`,
    fbappid: `2139031849601255`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VIT Works`,
        short_name: `VIT Works`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0C4579`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.microCMS_API_KEY.replace(/\"/g, ""),
        serviceId: "vit-works",
        apis: [
          {
            endpoint: "works",
          },
          {
            endpoint: "skills",
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `body-scroll-lock`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        }`,
        serialize: ({ site, allSitePage }) => {
          return allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `weekly`,
              priority: 0.5,
            }
          })
        }
      }
    },
  ],
}
