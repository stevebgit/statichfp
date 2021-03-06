/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
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

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
		  {/* <script src="https://code.jquery.com/jquery-3.4.1.slim.js" type="text/javascript" /> */}
		  {/* <script src="/jquery-migrate.js" type="text/javascript" /> */}
		  {/* <script src="/jquery.js" > </script>  */}
		  
		  
		  {/* <script type='text/javascript' src='https://highfrequencyperspectives.com/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp'></script>
		  
		  <script type='text/javascript' src='https://highfrequencyperspectives.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script> */}

		  {/* <script src='/jquery.js?ver=1.12.4-wp'></script> */}
		  {/* <script src='/jquery-migrate.js?ver=1.4.1'></script> */}
		  {/* <script src="/article-card2.js"></script>  */}

	</Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
