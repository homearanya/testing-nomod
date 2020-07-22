import React from 'react'
import styled from 'styled-components'

import { graphql } from 'gatsby'
import Layout, { PageProps } from '../components/layout'
import SEO from '../components/seo'
import HeroSection, { HeroSectionData } from '../components/hero-section'
import DownloadSection, {
  DownloadSectionData,
} from '../components/download-section'
import media from '../styles/media'

interface AboutPageProps extends PageProps {
  readonly data: PageQueryData
}

const AboutPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description, header, downloadSection },
    },
  },
  path,
  navigate,
}: AboutPageProps) => (
  <Layout className="about-page" pageProps={{ path, navigate }} noFooterTop>
    <SEO title={title} description={description} path={path} />
    <StyledHeroSection data={header} stripeBadge={false} borderBottom />
    <DownloadSection data={downloadSection} />
  </Layout>
)

export default AboutPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: HeroSectionData
      downloadSection: DownloadSectionData
    }
  }
}

export const query = graphql`
  query AboutPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          imageBlock {
            src {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 70) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                  presentationWidth
                }
              }
              publicURL
            }
            alt
          }
          textBlock {
            heading
            paragraphs
          }
        }
        downloadSection {
          imageBlock {
            src {
              childImageSharp {
                fluid(maxWidth: 370, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                  presentationWidth
                }
              }
              publicURL
            }
            alt
          }
          textBlock {
            heading
            headingTag
            text
            align
            storeButtons
          }
        }
      }
    }
  }
`

const StyledHeroSection = styled(HeroSection)`
  padding-bottom: 0;

  .heading {
    text-align: center;
    margin-bottom: 9rem;

    ${media.lessThan('mlg')`
      margin-bottom: 7rem;
    `}

    ${media.lessThan('md')`
      margin-bottom: 5rem;
    `}
  }

  .text{

    strong {
      font-weight: 500;
    }

    ${media.lessThan('md')`
      padding: 0 3.5rem;
    `}

    ${media.lessThan('sm')`
      padding: 0 3rem;
    `}
  }

  .text.last {
    margin-bottom: 7rem;
    ${media.lessThan('mlg')`
      margin-bottom: 5rem;
    `}

    ${media.lessThan('md')`
      margin-bottom: 3rem;
    `}

    ${media.lessThan('sm')`
      margin-bottom: 0rem;
    `}
  }

  & > div {
    max-width: 192rem;
    width: 100%;
    margin: 0 auto;
    padding: 0;

    >div {
        margin: 0;
      }

    .gatsby-image-wrapper {
      max-width: 192rem!important;
    }
  }
`
