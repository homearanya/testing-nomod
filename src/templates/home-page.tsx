import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import useMedia from 'use-media'

import { $breakpoints } from '../styles/media'
import Layout, { PageProps } from '../components/layout'
import SEO from '../components/seo'
import VideoPlayer from '../components/video-player'
import FeaturesSection, {
  FeaturesSectionData,
} from '../components/features-section'
import { UseCaseData } from '../components/use-case'
import UseCasesSection from '../components/use-cases-section'
import TestimonialsSection, {
  TestimonialsSectionData,
} from '../components/testimonials-section'
import DownloadSection, {
  DownloadSectionData,
} from '../components/download-section'
import media from '../styles/media'

import videoMP4 from '../videos/hero-home.mp4'
import videoWebm from '../videos/hero-home.webm'

interface HomePageProps extends PageProps {
  readonly data: PageQueryData
}

const HomePage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        featuresSection,
        useCasesSection,
        downloadSection,
        testimonialsSection,
      },
    },
  },
  path,
  navigate,
}: HomePageProps) => {
  const isSmallDesktop = useMedia({ maxWidth: $breakpoints.lg * 16 - 1 })
  return (
    <Layout className="home-page" pageProps={{ path, navigate }} noFooterTop>
      <SEO title={title} description={description} path={path} />
      <StyledHeroSection
        data={header}
        background="transparent"
        imageComponent={
          <VideoPlayer
            videoSrcMp4={videoMP4}
            videoSrcWebm={videoWebm}
            width={`${isSmallDesktop ? '100%' : '614'}`}
            imageBlock={header.imageBlock}
          />
        }
        stripeBadge={true}
      />
      <FeaturesSection data={featuresSection} />
      <UseCasesSection data={useCasesSection} />
      <TestimonialsSection data={testimonialsSection} />
      <DownloadSection data={downloadSection} />
    </Layout>
  )
}

export default HomePage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: DownloadSectionData
      featuresSection: FeaturesSectionData
      useCasesSection: UseCaseData[]
      downloadSection: DownloadSectionData
      testimonialsSection: TestimonialsSectionData
    }
  }
}

export const query = graphql`
  query HomePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          imageBlock {
            src {
              childImageSharp {
                fluid(maxWidth: 614, quality: 80) {
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
          textBlock {
            heading
            headingTag
            text
            align
          }
          features {
            imageBlock {
              src {
                childImageSharp {
                  fluid(maxWidth: 433, quality: 90) {
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
        useCasesSection {
          useCase
          heading
          text
          href
          imageBlock {
            src {
              childImageSharp {
                fluid(maxWidth: 694, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                  presentationWidth
                }
              }
              publicURL
            }
            alt
          }
          popup {
            src {
              childImageSharp {
                fluid(maxWidth: 360, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                  presentationWidth
                }
              }
              publicURL
            }
            alt
          }
        }
        testimonialsSection {
          heading
          testimonials {
            heading
            text
            rating
            person {
              name
              role
            }
            company {
              name
              logo {
                publicURL
              }
            }
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
const StyledHeroSection = styled(DownloadSection)`
  /* row */
  & > div:first-child > div {
    align-items: center;
  }
  padding: 3rem 0 7rem;
  ${media.lessThan('mlg')`
    padding: 4rem 0 5rem;
  `};
  ${media.lessThan('sm')`
      padding-top: 8rem;
  `};

  .text-block {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 7.5rem;
    ${media.lessThan('lg')`
      padding-left: 5rem;
  `};
    ${media.lessThan('mlg')`
      padding-left: 3rem;
  `};
    ${media.lessThan('md')`
      padding-left: 0rem;
  `};
  }
  .image-wrapper {
    margin-left: 0;
    position: static;
    padding-right: 13.5rem;
    ${media.lessThan('lg')`
      padding-right: 0rem;
  `};
  }
  .gatsby-image-wrapper {
    max-width: 64.1rem !important;
  }

  .stripe-badge {
    padding-top: 4rem;
    ${media.lessThan('md')`
      padding-top: 2rem;
  `};
  }
`
