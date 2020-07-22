import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import media from '../styles/media'
import Layout, { PageProps } from '../components/layout'
import SEO from '../components/seo'
import UseCasesHeroSection, {
  UseCasesHeroSectionData,
} from '../components/use-cases-hero-section'
import TestimonialsSection2, {
  TestimonialsSection2Data,
} from '../components/testimonials-section-2'
import DownloadSection, {
  DownloadSectionData,
} from '../components/download-section'

interface UseCasesPageProps extends PageProps {
  readonly data: PageQueryData
}

const UseCasesPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        header,
        testimonialsSection,
        downloadSection,
      },
    },
  },
  path,
  navigate,
}: UseCasesPageProps) => (
  <Layout className="use-cases-page" pageProps={{ path, navigate }} noFooterTop>
    <SEO title={title} description={description} path={path} />
    <StyledUseCasesHeroSection data={header} />
    <TestimonialsSection2 data={testimonialsSection} />
    <StyledDownloadSection data={downloadSection} borderTop />
  </Layout>
)

export default UseCasesPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: UseCasesHeroSectionData
      testimonialsSection: TestimonialsSection2Data
      downloadSection: DownloadSectionData
    }
  }
}

export const query = graphql`
  query UseCasesPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          textBlock {
            heading
            text
            align
          }
          useCases {
            imageBlock {
              src {
                childImageSharp {
                  fluid(maxWidth: 380, quality: 90) {
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
            heading
            text
            href
          }
        }
        testimonialsSection {
          textBlock {
            heading
            headingTag
            text
            align
          }
          testimonials {
            person {
              avatar {
                src {
                  publicURL
                }
                alt
              }
              name
              backgroundColor
            }
            text
            date
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

const StyledUseCasesHeroSection = styled(UseCasesHeroSection)`
  ${media.lessThan('sm')`
    padding-top: 8rem;
  `};
`

const StyledDownloadSection = styled(DownloadSection)``
