import React from 'react'
import styled from 'styled-components'
import useMedia from 'use-media'

import { $breakpoints } from '../styles/media'
import { graphql } from 'gatsby'
import Layout, { PageProps } from '../components/layout'
import SEO from '../components/seo'
import FlowLines from '../components/flow-lines'
import ImageTextBlockSection, {
  ImageTextBlockSectionData,
} from '../components/image-textblock-section'
import DownloadSection, {
  DownloadSectionData,
} from '../components/download-section'
import { $white } from '../styles/variables'
import media from '../styles/media'

interface LunatapTransitionPageProps extends PageProps {
  readonly data: PageQueryData
  readonly location: Location
}

const LunatapTransitionPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        imageTextSection: { imageText1, imageText2, imageText3 },
        header,
      },
    },
  },
  navigate,
  location,
}: LunatapTransitionPageProps) => {
  const isSm = useMedia({ maxWidth: $breakpoints.sm * (16 - 0.001) })
  const isMd = useMedia({ maxWidth: $breakpoints.md * (16 - 0.001) })
  const isMlg = useMedia({ maxWidth: $breakpoints.mlg * (16 - 0.001) })
  const isLg = useMedia({ maxWidth: $breakpoints.lg * (16 - 0.001) })
  const isXl = useMedia({ maxWidth: $breakpoints.xl * (16 - 0.001) })

  let flowLinesWidth = 718
  let flowLinesHeight = 400
  if (isMd) {
    flowLinesWidth = 365
    flowLinesHeight = 200
  } else if (isMlg) {
    flowLinesWidth = 499
    flowLinesHeight = 320
  } else if (isLg) {
    flowLinesWidth = 624
    flowLinesHeight = 400
  } else if (isXl) {
    flowLinesWidth = 624
    flowLinesHeight = 400
  }

  return (
    <Layout
      className="lunatap"
      pageProps={{ path: location.pathname, navigate }}
    >
      <SEO title={title} description={description} path={location.pathname} />
      <StyledDownloadSection background={$white} data={header} />
      <ImageTextBlockSection
        textPosition={isSm ? 'left' : 'right'}
        data={imageText1}
        marginTop
      />
      <FlowLines width={flowLinesWidth} height={flowLinesHeight} />
      <ImageTextBlockSection textPosition="left" data={imageText2} />
      <FlowLines reverse width={flowLinesWidth} height={flowLinesHeight} />
      <ImageTextBlockSection
        textPosition={isSm ? 'left' : 'right'}
        data={imageText3}
        marginBottom
      />
    </Layout>
  )
}

export default LunatapTransitionPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: DownloadSectionData
      imageTextSection: {
        imageText1: ImageTextBlockSectionData
        imageText2: ImageTextBlockSectionData
        imageText3: ImageTextBlockSectionData
      }
    }
  }
}

export const query = graphql`
  query LunatapTransitionPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        header {
          imageBlock {
            src {
              childImageSharp {
                fluid(maxWidth: 600, quality: 90) {
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
            paragraphs
            storeButtons
          }
        }
        imageTextSection {
          imageText1 {
            imageBlock {
              src {
                childImageSharp {
                  fluid(maxWidth: 470, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    presentationWidth
                  }
                }
                publicURL
              }
              alt
            }
            textBlock {
              text
            }
          }
          imageText2 {
            imageBlock {
              src {
                childImageSharp {
                  fluid(maxWidth: 454, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    presentationWidth
                  }
                }
                publicURL
              }
              alt
            }
            textBlock {
              text
            }
          }
          imageText3 {
            imageBlock {
              src {
                childImageSharp {
                  fluid(maxWidth: 460, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    presentationWidth
                  }
                }
                publicURL
              }
              alt
            }
            textBlock {
              paragraphs
            }
          }
        }
      }
    }
  }
`

const StyledDownloadSection = styled(DownloadSection)`
  .image-wrapper {
    margin-left: 0;

    .gatsby-image-wrapper {
      max-width: 70rem !important;
      ${media.lessThan('mlg')`
        max-width: unset !important;
      `}
    }
  }

  .text-block {
    padding-top: 12rem;
    padding-bottom: 19rem;
    ${media.lessThan('xl')`
      padding-top: 12rem;
      padding-bottom: 9rem;
  `};
    ${media.lessThan('lg')`
      padding-bottom: 12rem;
      padding-bottom: 9rem;
  `};
    ${media.lessThan('mlg')`
    padding-top: 4.7rem;
    padding-bottom: 8rem;
  `};
    ${media.lessThan('md')`
    padding-top: 7.7rem;
    padding-bottom: 4rem;
  `};

    ${media.lessThan('sm')`
    padding-top: 5rem;
    padding-bottom: 4rem;
  `};
  }
`
