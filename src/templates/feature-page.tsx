import React from 'react'
import styled from 'styled-components'

import { graphql } from 'gatsby'
import Layout, { PageProps } from '../components/layout'
import SEO from '../components/seo'
import HeroSection, { HeroSectionData } from '../components/hero-section'
import FeaturesSection, {
  FeaturesSectionData,
} from '../components/features-section'
import DownloadSection, {
  DownloadSectionData,
} from '../components/download-section'

interface FeauturePageProps extends PageProps {
  readonly data: PageQueryData
  readonly location: Location
}

const FeauturePage = ({
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
}: FeauturePageProps) => (
  <Layout
    className="feature-page"
    pageProps={{ path: location.pathname, navigate }}
    noFooterTop
  >
    <SEO title={title} description={description} path={location.pathname} />
    <StyledHeroSection data={header} borderBottom stripeBadge={false} />
    <StyledFeaturesSection
      data={featuresSection}
      paddingBottom
      featuresButton={false}
    />
    <StyledDownloadSection data={downloadSection} />
  </Layout>
)

export default FeauturePage

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
  query FeauturePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          imageBlock {
            src {
              childImageSharp {
                fluid(maxWidth: 665) {
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
                  fluid(maxWidth: 432, quality: 90) {
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

const StyledHeroSection = styled(HeroSection)``

const StyledFeaturesSection = styled(FeaturesSection)``

const StyledDownloadSection = styled(DownloadSection)``
