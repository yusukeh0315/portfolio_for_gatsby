import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          lang
          description
          siteUrl
          local
          fbappid
        }
      }
    }
  `)

  let title = props.pagetitle
    ? `${props.pagetitle} | ${data.site.siteMetadata.title}`
    : data.site.siteMetadata.title

  if (props.pagetitle === "Portfolio") {
    title = props.pagetitle
  }

  const description = props.pagedesc || data.site.siteMetadata.description

  const url = props.pagepath
    ? `${data.site.siteMetadata.siteUrl}${props.pagepath}`
    : data.site.siteMetadata.siteUrl

  const imgurl = props.pageimg
    ? `${data.site.siteMetadata.siteUrl}${props.pageimg}`
    : props.blogimg || `${data.site.siteMetadata.siteUrl}/ogp_image.png`
  const imgw = props.pageimgw || 1280
  const imgh = props.pageimgh || 640

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "VIT Works",
        item: `${data.site.siteMetadata.siteUrl}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${data.site.siteMetadata.siteUrl}/about/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Works",
        item: `${data.site.siteMetadata.siteUrl}/works/`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${data.site.siteMetadata.siteUrl}/contact/`,
      },
    ],
  }

  return (
    <div>
      <Helmet>
        <html lang={data.site.siteMetadata.lang} />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="canonical" href={url} />

        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={data.site.siteMetadata.locale} />
        <meta property="fb:app_id" content={data.site.siteMetadata.fbappid} />

        <meta property="og:image" content={imgurl} />
        <meta property="og:image:width" content={imgw} />
        <meta property="og:image:height" content={imgh} />
        <meta name="twitter:card" content="summary_large_image" />

        {<script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
      </Helmet>
    </div>
  )
}

export default Seo
