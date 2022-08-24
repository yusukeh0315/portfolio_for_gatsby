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
    siteUrl: `https://vitworks.net/`,
    local: `ja_JP`,
    fbappid: `2139031849601255`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/sitemap`,
        createLinkInHead: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-968RDKR176"],
        pluginConfig: {
          head: true,
        },
      },
    },
    `react-scroll`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://vitworks.net/`,
        stripQueryString: true,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://vitworks.net/",
        sitemap: "https://vitworks.net/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
}
