const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const localesArray = require('./src/i18n/locales.json')

const localeArrayLowerCase = localesArray.map(locale => {
  locale.locale = locale.locale.toLowerCase()
  return locale
})

const AllLocales = localeArrayLowerCase
  .filter(locale => locale.available)
  .map(localeObject => localeObject.locale)

const defaultLocale = localeArrayLowerCase.find(
  locale => locale.default && locale.available,
).locale

const nonDefaultlocales = localeArrayLowerCase
  .filter(locale => !locale.default && locale.available)
  .map(locale => locale.locale)

const comingSoonLocales = localeArrayLowerCase
  .filter(locale => !locale.available)
  .map(locale => locale.locale)

const defaultLocaleNodes = {}
const nonDefaultLocalesNodes = {}
const isEnvDevelopment = process.env.NODE_ENV === 'development'

const createRedirectsForNonDefaults = (path, createRedirect) => {
  // From default paths create redirects for non-default locales
  if (path === '/404/') return
  localeArrayLowerCase
    .filter(locale => !locale.default)
    .forEach(locale => {
      const country = locale.locale.split('-')[1]
      if (locale.available) {
        createRedirect({
          fromPath: path,
          toPath: `/${locale.locale}${path}`,
          isPermanent: false,
          force: true,
          redirectInBrowser: isEnvDevelopment,
          Country: country,
        })
        localeArrayLowerCase
          .filter(e => !e.default && e.available && e.locale !== locale.locale)
          .forEach(e => {
            createRedirect({
              fromPath: `/${locale.locale}${path}`,
              toPath: `/${e.locale}${path}`,
              isPermanent: false,
              force: true,
              redirectInBrowser: isEnvDevelopment,
              Country: e.locale.split('-')[1],
            })
          })
      } else {
        createRedirect({
          fromPath: path,
          toPath: `/${locale.locale}/`,
          isPermanent: false,
          force: true,
          redirectInBrowser: isEnvDevelopment,
          Country: country,
        })
      }
    })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions
  // create site's pages
  try {
    const { errors, data } = await graphql(`
      {
        allMarkdownRemark(
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/src/pages/" } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
              }
            }
          }
        }
      }
    `)
    if (errors) {
      errors.forEach(e => console.error(e.toString()))
      throw new Error('error on graphql for filesystem nodes')
    }
    const { edges: pages } = data.allMarkdownRemark

    // collect default and non-default locales nodes

    pages.forEach(({ node }) => {
      const locale = node.fields.slug.split(`/`)[1]
      const relativeSlug =
        '/' +
        node.fields.slug
          .split(`/`)
          .slice(2)
          .join('/')
      if (locale === defaultLocale) {
        defaultLocaleNodes[relativeSlug] = { node }
      } else {
        nonDefaultLocalesNodes[node.fields.slug] = { node }
      }
    })

    // create pages for all locales from the default locale pages
    // while overriding with the locale specific pages

    // iterate over all the locales on JSON file
    AllLocales.forEach(locale => {
      const localeUrl = locale === defaultLocale ? '' : `/${locale}`
      // iterate over all the pages under default locale folder
      Object.keys(defaultLocaleNodes).forEach(relativeSlug => {
        const fullUrl = '/' + locale + relativeSlug
        let node
        if (nonDefaultLocalesNodes[fullUrl]) {
          node = nonDefaultLocalesNodes[fullUrl].node
          nonDefaultLocalesNodes[fullUrl].pageCreated = true
        } else {
          node = defaultLocaleNodes[relativeSlug].node
        }
        const id = node.id
        let matchPath
        if (relativeSlug === '/404/' && localeUrl !== '') {
          matchPath = `/${locale}/*`
        }
        createPage({
          path: localeUrl + relativeSlug,
          component: path.resolve(
            `./src/templates/${node.frontmatter.templateKey}.tsx`,
          ),
          // additional data can be passed via context
          context: {
            id,
            locale,
          },
          matchPath: matchPath,
        })
        if (locale === defaultLocale) {
          createRedirectsForNonDefaults(relativeSlug, createRedirect)
        }
      })
    })

    // Create all possible pages on non default pages that
    // don't exist on default locales folder
    Object.keys(nonDefaultLocalesNodes).forEach(slug => {
      if (!nonDefaultLocalesNodes[slug].pageCreated) {
        const locale = slug.split('/')[1]
        const node = nonDefaultLocalesNodes[slug].node
        const id = node.id
        createPage({
          path: slug,
          component: path.resolve(
            `./src/templates/${node.frontmatter.templateKey}.tsx`,
          ),
          // additional data can be passed via context
          context: {
            id,
            locale,
          },
        })
        // create page for default locale
        const relativeSlug =
          '/' +
          slug
            .split(`/`)
            .slice(2)
            .join('/')
        createPage({
          path: relativeSlug,
          component: path.resolve(
            `./src/templates/${node.frontmatter.templateKey}.tsx`,
          ),
          // additional data can be passed via context
          context: {
            id,
            locale: defaultLocale,
          },
        })
        createRedirectsForNonDefaults(relativeSlug, createRedirect)
        // create page for the other non default locale where
        // page is not created
        nonDefaultlocales
          .filter(nonDefaultlocale => nonDefaultlocale !== locale)
          .forEach(nonDefaultlocale => {
            const fullUrl = '/' + nonDefaultlocale + relativeSlug
            if (!nonDefaultLocalesNodes[fullUrl]) {
              createPage({
                path: fullUrl,
                component: path.resolve(
                  `./src/templates/${node.frontmatter.templateKey}.tsx`,
                ),
                // additional data can be passed via context
                context: {
                  id,
                  locale: nonDefaultlocale,
                },
              })
            }
          })
      }
    })
  } catch (error) {
    console.log(error)
  }
  // create coming soon pages

  comingSoonLocales.forEach(locale => {
    const slug = `/${locale}/`
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/coming-soon-page.tsx`),
      // additional data can be passed via context
      context: {
        slug,
        locale,
      },
    })
    // create 404 page
    const id404 = nonDefaultLocalesNodes[`/${locale}/404/`]
      ? nonDefaultLocalesNodes[`/${locale}/404/`].node.id
      : defaultLocaleNodes['/404/'].node.id
    createPage({
      path: `/${locale}/404/`,
      component: path.resolve(`./src/templates/404.tsx`),
      // additional data can be passed via context
      context: {
        id: id404,
        locale,
      },
      matchPath: `/${locale}/*`,
    })
  })
  // *
  // Create redirects for _redirects file (Netlify)
  // *
  // iterate over all the locales on JSON file
  localeArrayLowerCase
    .filter(locale => !locale.default)
    .forEach(locale => {
      // Create redirect for default language
      const country = locale.locale.split('-')[1]
      createRedirect({
        fromPath: `/*`,
        toPath: `/${locale.locale}/404.html`,
        statusCode: 404,
        redirectInBrowser: isEnvDevelopment,
        Country: country,
      })
      if (!locale.available) {
        createRedirect({
          fromPath: `/${locale.locale}/*`,
          toPath: `/${locale.locale}/`,
          statusCode: 302,
          force: true,
          redirectInBrowser: isEnvDevelopment,
          Country: country,
        })
      }

      localeArrayLowerCase
        .filter(e => e.locale !== locale.locale)
        .forEach(e => {
          if (e.available) {
            // createRedirect({
            //   fromPath: `/${locale.locale}/*`,
            //   toPath: `/${e.default ? '' : `${e.locale}/`}:splat`,
            //   force: true,
            //   redirectInBrowser: isEnvDevelopment,
            //   Country: e.locale.split('-')[1],
            // })
          } else {
            createRedirect({
              fromPath: `/${locale.locale}/*`,
              toPath: `/${e.default ? '' : `${e.locale}/`}`,
              force: true,
              redirectInBrowser: isEnvDevelopment,
              Country: e.locale.split('-')[1],
            })
          }
        })
    })
  // fallback - default site
  createRedirect({
    fromPath: `/${defaultLocale}/*`,
    toPath: `/:splat`,
    force: true,
    redirectInBrowser: isEnvDevelopment,
    Country: defaultLocale.split('-')[1],
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // filtering contentfull nodes as they don't have fileAbsolutePath
  if (node.fileAbsolutePath && node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Customise Graphql Schema

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  const typeDefs = `
    type MarkdownRemarkFrontmatterDownloadSectionTextBlock implements Node @dontInfer {
      heading: String 
      headingTag: String
      text: String
      align: String
      storeButtons: Boolean
    }
    type MarkdownRemarkFrontmatterLocalesMenusMenuItems implements Node @dontInfer {
      name: String
      href: String
      newTab: Boolean
    }
    type MarkdownRemarkFrontmatterLocalesMenuItems implements Node @dontInfer {
      name: String
      href: String
      newTab: Boolean
    }
  `
  createTypes(typeDefs)
}

// Creating Prefixed 404 Pages for Different locales

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Check if the page is a localized 404
  if (page.path.match(/^\/[a-z]{2}-[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    // Get the language code from the path, and match all paths
    // starting with this code (apart from other valid paths)
    const localeCode = page.path.split(`/`)[1]
    page.matchPath = `/${localeCode}/*`
    // Recreate the modified page
    deletePage(oldPage)
    createPage(page)
  }
  // replace node id of non default locale pages
}

// Using the temporary fix in the issue we will add a
// global setting for global.GENTLY so webpack will set
// the value to false and not pay attention to the rest
// of the line. This line was confirmed it was for
// testing purposes only.

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'global.GENTLY': false,
      }),
    ],
  })
}
