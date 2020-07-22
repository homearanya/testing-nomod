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
import { buildHreflangs } from '../utils/helpers'

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
  const { index, locales } = useLocaleState()

  const [currentLanguage, hrefLangTags, ogLangTags] = buildHreflangs(
    useLocaleState(),
    path,
    site.siteMetadata.siteUrl,
  )
  const linkArray =
    hrefLangTags && hrefLangTags.length > 0 ? hrefLangTags : undefined

  const { defaultTitle, defaultDescription } = locales[index]

  const metaDescription =
    description || defaultDescription || site.siteMetadata.description
  const siteTitle = defaultTitle || site.siteMetadata.title
  const metaKeywords = site.siteMetadata.keywords

  const splittedPath = path.split(`${locales[index].locale}`)
  const unlocalisedPath = splittedPath[splittedPath.length - 1]

  const unlocalisedPageUrl = path
    ? `${site.siteMetadata.siteUrl}${unlocalisedPath}`
    : `${site.siteMetadata.siteUrl}`
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
          content: `/img/og-image.png`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
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
        {
          name: `twitter:image`,
          content: `/img/og-image.png`,
        },
        {
          name: `twitter:image:alt`,
          content: `Nomod`,
        },
        // for apple devices
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1`,
        },
        ...ogLangTags,
      ].concat(meta)}
      link={linkArray}
    />
  )
}

export default SEO
