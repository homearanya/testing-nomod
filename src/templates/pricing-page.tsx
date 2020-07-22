import React from 'react'
import styled from 'styled-components'

import { graphql } from 'gatsby'
import Layout, { PageProps } from '../components/layout'
import SEO from '../components/seo'
import HeroSection, { HeroSectionData } from '../components/hero-section'
import PricingImage, { PricingImageData } from '../components/pricing-image'

import FeaturesSection, {
  FeaturesSectionData,
} from '../components/features-section'
import DownloadSection, {
  DownloadSectionData,
} from '../components/download-section'
import media from '../styles/media'

interface PricingPageProps extends PageProps {
  readonly data: PageQueryData
  readonly location: Location
}

const PricingPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        pricingImage,
        featuresSection,
        downloadSection,
      },
    },
  },
  navigate,
  location,
}: PricingPageProps) => (
  <Layout
    className="pricing-page"
    pageProps={{ path: location.pathname, navigate }}
    noFooterTop
  >
    <SEO title={title} description={description} path={location.pathname} />
    <StyledHeroSection
      data={header}
      stripeBadge={false}
      imageComponent={<PricingImage data={pricingImage} />}
    />
    <StyledFeaturesSection data={featuresSection} paddingBottom />
    <StyledDownloadSection data={downloadSection} />
  </Layout>
)

export default PricingPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: HeroSectionData
      pricingImage: PricingImageData
      featuresSection: FeaturesSectionData
      downloadSection: DownloadSectionData
    }
  }
}

export const query = graphql`
  query PricingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          textBlock {
            heading
            text
            storeButtons
            align
          }
        }
        pricingImage {
          percentage
          benefits
        }
        featuresSection {
          textBlock {
            heading
            align
          }
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

const StyledHeroSection = styled(HeroSection)`
  ${media.lessThan('sm')`
      padding-top: 8rem;
  `};
  .text-block {
    .text.last {
      margin-bottom: 6rem;

      ${media.lessThan('xl')`
      margin-bottom: 6rem;
    `};
      ${media.lessThan('lg')`
      margin-bottom: 6rem;
    `};
      ${media.lessThan('mlg')`
      margin-bottom: 5rem;
    `};
      ${media.lessThan('md')`
      margin-bottom: 4.7rem;
    `};
    }
  }

  .image-wrapper {
    margin-top: 0;
  }
`

const StyledFeaturesSection = styled(FeaturesSection)``

const StyledDownloadSection = styled(DownloadSection)``
