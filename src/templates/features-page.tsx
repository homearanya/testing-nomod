import React from 'react'
import styled from 'styled-components'

import { graphql } from 'gatsby'
import Layout, { PageProps } from '../components/layout'
import SEO from '../components/seo'
import HeroSection from '../components/hero-section'
import FeaturesImage from '../components/features-image'
import FeaturesSection, {
  FeaturesSectionData,
} from '../components/features-section'
import DownloadSection, {
  DownloadSectionData,
} from '../components/download-section'
import media from '../styles/media'

interface FeaturesPageProps extends PageProps {
  readonly data: PageQueryData
  readonly location: Location
}

const FeaturesPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        featuresSection,
        header,
        downloadSection,
      },
    },
  },
  navigate,
  location,
}: FeaturesPageProps) => (
  <Layout
    className="features-page"
    pageProps={{ path: location.pathname, navigate }}
    noFooterTop
  >
    <SEO title={title} description={description} path={location.pathname} />
    <StyledHeroSection
      data={header}
      borderBottom
      stripeBadge={false}
      imageComponent={<FeaturesImage />}
    />
    <StyledFeaturesSection
      data={featuresSection}
      cardMode={3}
      columnsSM={4}
      columnsMD={6}
      featuresButton={false}
      paddingTop
      paddingBottom
    />
    <DownloadSection data={downloadSection} />
  </Layout>
)

export default FeaturesPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      featuresSection: FeaturesSectionData
      header: DownloadSectionData
      downloadSection: DownloadSectionData
    }
  }
}

export const query = graphql`
  query FeaturesPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          textBlock {
            heading
            text
            paragraphs
            align
            storeButtons
          }
        }
        featuresSection {
          textBlock {
            heading
            text
            align
          }
          features {
            imageBlock {
              src {
                childImageSharp {
                  fluid(maxWidth: 800, quality: 90) {
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
              text
            }
            href
          }
        }
        downloadSection {
          imageBlock {
            src {
              childImageSharp {
                fluid(maxWidth: 435, quality: 90) {
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
  ${media.lessThan('sm')`
    padding-top: 8rem;
  `};

  .image-wrapper {
    margin-top: 4.3rem;
    ${media.lessThan('xl')`
      margin-top: 7.7rem;
    `};
    ${media.lessThan('lg')`
      margin-top: 4.7rem;
    `};
    ${media.lessThan('mlg')`
      margin-top: 4.5rem;
    `};
    ${media.lessThan('sm')`
      margin-top: 3rem;
    `};
  }
`
const StyledFeaturesSection = styled(FeaturesSection)`
  .features-section-container {
    ${media.lessThan('sm')`
      padding-left: 0rem;
      padding-right: 0rem;
    > div {
      margin-left: 0;
      margin-right: 0;
    }
    `};
  }

  .feature-cards > div:first-child {
    flex: 1 1 100%;
    max-width: 100%;

    .card-wrapper {
      display: block;
      width: 100%;
      padding-top: 5.6rem;

      ${media.lessThan('mlg')`
        padding-top: 4.4rem;
      `};
      ${media.lessThan('md')`
        padding-top: 3.6rem;
      `};

      .text-block-wrapper {
        text-align: center;
        .feature-card-text {
          max-width: 92.2rem;
          margin: 0 auto;
          ${media.lessThan('mlg')`
            max-width: 74.9rem;
          `};
        }
        margin-bottom: 3rem;
        ${media.lessThan('md')`
            margin-bottom: 1.5rem;
       `};
      }

      .image-block-wrapper {
        display: block;
        a:link,
        a:visited {
          justify-content: center;
        }

        .feature-card-read-more {
          margin-bottom: 3rem;

          ${media.lessThan('md')`
            margin-bottom: 1.5rem;
          `};
        }

        .image-wrapper {
          max-width: 80rem;
          margin-left: auto;
          margin-right: auto;

          ${media.lessThan('mlg')`
            max-width: 58rem;
          `};
          ${media.lessThan('md')`
            max-width: 40rem;
          `};
        }
      }
    }
  }
`
