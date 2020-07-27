/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { useLocaleState } from '../context/locale-context'
import { getLocaleFromPath, buildHreflangs } from '../utils/helpers'

interface StaticQueryData {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
      author: string
      siteUrl: string
    }
  }
}

interface SEOProps {
  readonly title: string
  readonly description?: string
  readonly meta?: []
  readonly path: string
}

function SEO({ title, description = '', meta = [], path }: SEOProps) {
  const { site }: StaticQueryData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            author
            siteUrl
          }
        }
      }
    `,
  )
  const { locales } = useLocaleState()

  const [currentLanguage, hrefLangTags] = buildHreflangs(
    useLocaleState(),
    path,
    site.siteMetadata.siteUrl,
  )

  const { defaultTitle, defaultDescription } = getLocaleFromPath(path, locales)

  const metaDescription =
    description || defaultDescription || site.siteMetadata.description
  const siteTitle = defaultTitle || site.siteMetadata.title
  const metaKeywords = site.siteMetadata.keywords

  const pageUrl = path
    ? `${site.siteMetadata.siteUrl}${path}`
    : `${site.siteMetadata.siteUrl}`

  return (
    <Helmet
      htmlAttributes={{
        lang: currentLanguage,
      }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      link={[
        {
          rel: 'canonical',
          href: pageUrl,
        },
        ...hrefLangTags,
      ]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `og:title`,
          content: `${siteTitle} | ${title}`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `business.business`,
        },
        {
          property: `og:url`,
          content: pageUrl,
        },
        {
          property: `og:image`,
          content: `${site.siteMetadata.siteUrl}/img/og-image.png`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.author,
        },
        // for apple devices
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1`,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
