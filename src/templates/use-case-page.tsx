import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import media from '../styles/media'
import Layout, { PageProps } from '../components/layout'
import SEO from '../components/seo'
import HeroSection, { HeroSectionData } from '../components/hero-section'
import FeaturesSection, {
  FeaturesSectionData,
} from '../components/features-section'
import DownloadSection, {
  DownloadSectionData,
} from '../components/download-section'

interface UseCasePageProps extends PageProps {
  readonly data: PageQueryData
  readonly location: Location
}

const UseCasePage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        featuresSection,
        downloadSection,
      },
    },
  },
  navigate,
  location,
}: UseCasePageProps) => (
  <Layout
    className="use-case-page"
    pageProps={{ path: location.pathname, navigate }}
    noFooterTop
  >
    <SEO title={title} description={description} path={location.pathname} />
    <StyledHeroSection data={header} stripeBadge={false} />
    <StyledFeaturesSection
      data={featuresSection}
      cardMode={4}
      columnsSM={8}
      columnsMD={12}
      featuresButton={false}
    />
    <StyledDownloadSection data={downloadSection} />
  </Layout>
)

export default UseCasePage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: HeroSectionData
      featuresSection: FeaturesSectionData
      downloadSection: DownloadSectionData
    }
  }
}

export const query = graphql`
  query UseCasePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          imageBlock {
            src {
              childImageSharp {
                fluid(maxWidth: 1543, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                  presentationWidth
                }
              }
              publicURL
            }
            srcSmall {
              childImageSharp {
                fluid(maxWidth: 768, quality: 90) {
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
            storeButtons
            align
          }
        }
        featuresSection {
          features {
            imageBlock {
              src {
                childImageSharp {
                  fluid(maxWidth: 450, quality: 90) {
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
            textLeft
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
  /* container */
  & > div {
    ${media.greaterThan('lg')`
        max-width: 154.3rem;
        padding: 0;
        > div {
          margin: 0;
        }
    `};
  }

  .text-block {
    .heading {
      ${media.lessThan('md')`
        line-height: 5.2rem;
        margin-bottom: 2.3rem;
     `};
      ${media.lessThan('sm')`
        font-size: 2.8rem;
        line-height: 3.3rem;
        margin-bottom: 2rem;
     `};
    }

    .text {
      max-width: 130rem;
      line-height: 2.8rem;
      ${media.lessThan('xl')`
        max-width: 101.9rem;
     `};
      ${media.lessThan('lg')`
        max-width: 99.4rem;
     `};
      ${media.lessThan('mlg')`
        font-size: 2rem;
        max-width: 84.5rem;
     `};
      ${media.lessThan('md')`
        font-size: 1.8rem;
        max-width: 60.1rem;
     `};
      ${media.lessThan('sm')`
        font-size: 1.5rem;
        max-width: 50rem;
     `};
    }
    .text.last {
      margin-bottom: 6.1rem;
      ${media.lessThan('md')`
        margin-bottom: 4.7rem;
     `};
      ${media.lessThan('sm')`
        margin-bottom: 2rem;
     `};
    }
  }

  .image-wrapper {
    margin-top: 0;
    .gatsby-image-wrapper {
      max-width: 154.3rem !important;
    }
  }
`

const StyledFeaturesSection = styled(FeaturesSection)`
  .features-section-container {
    max-width: 141rem;
    ${media.lessThan('sm')`
      padding: 0;

      >div {
        margin: 0;
      }
    `};
  }

  .text-block .last {
    margin-bottom: 13rem;

    ${media.lessThan('md')`
      margin-bottom: 9rem;
    `};

    ${media.lessThan('sm')`
      margin-bottom: 5rem;
    `};
  }
`
const StyledDownloadSection = styled(DownloadSection)``
