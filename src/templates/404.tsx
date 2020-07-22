import React from 'react'
import { graphql } from 'gatsby'

import styled from 'styled-components'
import { CustomContainer } from '../styles/common.styled'

import media from '../styles/media'
import Layout, { PageProps } from '../components/layout'
import SEO from '../components/seo'
import { TextBlockData } from '../types'
import TextBlock from '../components/text-block'

interface NotFoundPageProps extends PageProps {
  readonly data: PageQueryData
  readonly location: Location
}

const NotFoundPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description, textBlock },
    },
  },
  navigate,
  location,
}: NotFoundPageProps) => {
  return (
    <Layout
      className="notfound-page"
      pageProps={{ path: location.pathname, navigate }}
    >
      <SEO title={title} description={description} path={location.pathname} />
      <CustomContainer>
        <Wrapper>
          <StyledTextBlock data={textBlock} />
        </Wrapper>
      </CustomContainer>
    </Layout>
  )
}

const Wrapper = styled.div`
  max-width: 80rem;
  text-align: center;
  margin: 0 auto;
  margin: 16rem auto 12rem;

  ${media.lessThan('md')`
    margin: 14rem auto 7rem;
  `};

  ${media.lessThan('sm')`
    margin: 5rem auto 5rem;
  `};
`

const StyledTextBlock = styled(TextBlock)`
  .heading {
    font-size: 10rem;
    margin-bottom: 4rem;

    ${media.lessThan('mlg')`
    font-size: 9rem;
  `};
    ${media.lessThan('md')`
    font-size: 7rem;
  `};
    ${media.lessThan('sm')`
    font-size: 4.5rem;
    line-height: 3.75rem;
  `};
  }

  .text {
    ${media.lessThan('lg')`
      font-size: 2.2rem;
  `};
    ${media.lessThan('mlg')`
      font-size: 2rem;
  `};
    ${media.lessThan('md')`
      font-size: 1.7rem;
  `};
    ${media.lessThan('sm')`
      font-size: 1.5rem;
  `};
  }

  .text.last {
    margin-bottom: 7rem;
    ${media.lessThan('sm')`
      margin-bottom: 3rem;
  `};
  }
`

export default NotFoundPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
      textBlock: TextBlockData
    }
  }
}

export const query = graphql`
  query NotFoundPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        textBlock {
          heading
          text
          storeButtons
          align
        }
      }
    }
  }
`
