/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = "Experience professional piercing services in a clean and welcoming environment at our shop in Palolem, Goa. Our experienced piercers use only the highest quality jewelry to ensure your comfort and satisfaction. Book your appointment today."
  const defaultTitle = site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle}</title>
      <meta name="description" content={site.siteMetadata?.description} />
      <meta property="og:title" content="Get Your Next Piercing at Our Shop in Palolem, Goa" />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
