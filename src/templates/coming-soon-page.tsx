import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import useMedia from 'use-media'

import { $breakpoints } from '../styles/media'

import Layout, { PageProps } from '../components/layout'
import SEO from '../components/seo'
import VideoPlayer from '../components/video-player'
import ImageTextBlockSection2, {
  ImageTextBlockSection2Data,
} from '../components/image-textblock-section-2'
import Subheader from '../components/subheader'
import DownloadSection, {
  DownloadSectionData,
} from '../components/download-section'
import media from '../styles/media'
import videoMP4 from '../videos/hero-home.mp4'
import videoWebm from '../videos/hero-home.webm'

interface ComingSoonPageProps extends PageProps {
  readonly data: PageQueryData
  readonly location: Location
}

const ComingSoonPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        title,
        description,
        imageTextSection: {
          header: imagetextsectionheader,
          imageText1,
          imageText2,
          imageText3,
        },
        header,
      },
    },
  },
  navigate,
  location,
}: ComingSoonPageProps) => {
  // for coming soon page
  const [showSignUp, setshowSignUp] = useState(false)
  const [setFocus, setSetFocus] = useState(false)

  const handlerSetFocus = () => setSetFocus(true)
  const handlerSetUnfocus = () => setSetFocus(false)

  const handlerShowSignUp = (element) => {
    let topOffset = 900
    if (element) {
      topOffset = element.getBoundingClientRect().top
    }

    if (topOffset < 0) {
      setshowSignUp(true)
    } else {
      setshowSignUp(false)
    }
  }
  //
  const isSm = useMedia({ maxWidth: $breakpoints.sm * (16 - 0.001) })
  const isSmallDesktop = useMedia({ maxWidth: $breakpoints.lg * 16 - 1 })

  return (
    <StyledLayout
      className="coming-soon-page"
      pageProps={{ path: location.pathname, navigate }}
      comingSoon
      showSignUp={showSignUp}
      handlerSetFocus={handlerSetFocus}
    >
      <SEO title={title} description={description} path={location.pathname} />
      <StyledHeroSection
        data={header}
        background="transparent"
        handlerShowSignUp={handlerShowSignUp}
        handlerSetUnfocus={handlerSetUnfocus}
        setFocus={setFocus}
        imageComponent={
          <VideoPlayer
            videoSrcMp4={videoMP4}
            videoSrcWebm={videoWebm}
            width={`${isSmallDesktop ? '100%' : '614'}`}
            imageBlock={header.imageBlock}
          />
        }
      />
      <ImageTextSectionHeader data={imagetextsectionheader} />
      <ImageTextSection
        textPosition={isSm ? 'left' : 'right'}
        data={imageText1}
      />
      <ImageTextSection textPosition="left" data={imageText2} />
      <ImageTextSection
        textPosition={isSm ? 'left' : 'right'}
        data={imageText3}
      />
    </StyledLayout>
  )
}

export default ComingSoonPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      header: DownloadSectionData
      imageTextSection: {
        header: DownloadSectionData
        imageText1: ImageTextBlockSection2Data
        imageText2: ImageTextBlockSection2Data
        imageText3: ImageTextBlockSection2Data
      }
    }
  }
}

export const query = graphql`
  query ComingSoonPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "coming-soon-page" } }) {
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
          }
          emailForm {
            introText
            textPlaceholder
            buttonText
          }
        }
        imageTextSection {
          header {
            textBlock {
              heading
              paragraphs
              align
            }
          }
          imageText1 {
            imageBlock {
              src {
                childImageSharp {
                  fluid(maxWidth: 570, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    presentationWidth
                  }
                }
                publicURL
              }
              alt
            }
            textBlock {
              icon {
                publicURL
              }
              heading
              text
            }
          }
          imageText2 {
            imageBlock {
              src {
                childImageSharp {
                  fluid(maxWidth: 587, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    presentationWidth
                  }
                }
                publicURL
              }
              alt
            }
            textBlock {
              icon {
                publicURL
              }
              heading
              text
            }
          }
          imageText3 {
            imageBlock {
              src {
                childImageSharp {
                  fluid(maxWidth: 503, quality: 80) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    presentationWidth
                  }
                }
                publicURL
              }
              alt
            }
            textBlock {
              icon {
                publicURL
              }
              heading
              text
            }
          }
        }
      }
    }
  }
`

const StyledLayout = styled(Layout)`
  .copy-right {
    p {
      ${media.lessThan('md')`
         border-top-width: 0.01rem;
      `};
    }
  }
  .bottom-menu-wrapper {
    ${media.lessThan('sm')`
         margin-bottom: 1rem;
        .twitter-icon {
          margin: 0.5rem auto 0;
          svg {
            width: 1.6rem;
          }
        }
    `};
  }
`

const StyledHeroSection = styled(DownloadSection)`
  &&& {
    ${media.lessThan('md')`
      padding-top:1rem;
  `};
    ${media.lessThan('sm')`
      padding-top:3rem;
      padding-bottom: 3rem;
  `};
  }
  /* row */
  & > div:first-child > div {
    align-items: center;

    ${media.lessThan('md')`
      flex-direction: column;
  `};
  }

  /* Text Column */
  & > div:first-child > div:first-child > div:first-child {
    ${media.lessThan('md')`
    margin-bottom: 5rem;
  `};
  }
  /* Columns */
  &&& > div:first-child > div:first-child > div {
    ${media.lessThan('md')`
      flex-basis: 100%;
      max-width: 100%;
      width: 100%;
  `};
  }
  padding-top: 3rem;
  padding-bottom: 12rem;
  ${media.lessThan('mlg')`
    padding-top: 4rem 
    padding-bottom: 5rem;
  `};
  ${media.lessThan('sm')`
      padding-top: 8rem;
      padding-bottom: 0rem;
  `};

  .text-block {
    max-width: 62rem;
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
      margin: 0 auto;
  `};

    .heading {
      margin-bottom: 8rem;
      ${media.lessThan('xl')`
        margin-bottom: 4.5rem;
      `};
      ${media.lessThan('md')`
        text-align:center;
        margin-bottom: 3rem;
      `};
      ${media.lessThan('sm')`
        font-size: 2.7rem;
        line-height: 3.3rem;
        margin-bottom: 2rem;
      `};
    }
  }

  .email-form-wrapper {
    padding-left: 7.5rem;
    ${media.lessThan('lg')`
      padding-left: 5rem;
  `};
    ${media.lessThan('mlg')`
      padding-left: 3rem;
  `};
    ${media.lessThan('md')`
    padding-left: 0rem;
      #email-form {
        margin: 0 auto;
      }
    `};
    ${media.lessThan('sm')`
      width: 100%;
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
const ImageTextSectionHeader = styled(Subheader)`
  .heading {
    ${media.lessThan('mlg')`
      max-width: 75rem;
    `};
  }
  .text-block .text {
    ${media.lessThan('xl')`
      max-width: 90rem;
    `};
    ${media.lessThan('mlg')`
      max-width: 70rem;
    `};
    ${media.lessThan('md')`
      max-width: 55rem;
    `};
  }
`
const ImageTextSection = styled(ImageTextBlockSection2)`
  /* container */
  & > div {
    max-width: 128rem !important;
  }
`
