import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { CustomContainer } from '../styles/common.styled'
import Layout, { PageProps } from '../components/layout'
import SEO from '../components/seo'
import AdditionalMenu from '../components/additional-menu'

import { $colorHeading, $colorText } from '../styles/variables'
import media from '../styles/media'

interface TermsPageProps extends PageProps {
  readonly data: PageQueryData
  readonly location: Location
}
const TermsPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description },
      html,
    },
  },
  navigate,
  location,
}: TermsPageProps) => (
  <Layout
    className="terms-page"
    pageProps={{ path: location.pathname, navigate }}
  >
    <SEO title={title} description={description} path={location.pathname} />
    <StyledContainer>
      <Menu />
      <Section>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Section>
    </StyledContainer>
  </Layout>
)

export default TermsPage

interface PageQueryData {
  markdownRemark: {
    frontmatter: {
      title: string
      description: string
    }
    html: string
  }
}

export const query = graphql`
  query TermsPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`
const StyledContainer = styled(CustomContainer)`
  margin-top: 17rem;
  max-width: 121rem;
  display: flex;

  ${media.lessThan('lg')`
    max-width: 100rem;
  `};

  ${media.lessThan('sm')`
    flex-direction: column;
    margin-top: 0;
    align-items: center;
  `};
`
const Content = styled.div``

const Menu = styled(AdditionalMenu)`
  margin-top: 15rem;
  flex: 1 0 25rem;
  max-width: 25rem;
  ${media.lessThan('sm')`
    margin-top: 5rem;
    flex: 1 0 auto;
  `};
`

const Section = styled.section`
  max-width: 100rem;
  flex: 1 1 auto;
  color: ${$colorHeading};
  font-size: 1.9rem;
  line-height: 3.9rem;

  h1 {
    font-weight: normal;
    font-size: 4.5rem;
    line-height: 7.5rem;
    color: ${$colorHeading};
    text-align: left;
  }

  h3 {
  }

  p span.date {
    display: block;
    margin-top: -2rem;
    margin-bottom: 4rem;
    font-size: 1.5rem;
    line-height: 1;
    color: ${$colorText};
  }

  p {
    line-height: 3.9rem;
    letter-spacing: -0.01rem;
    margin: 2rem 0;
  }

  ul {
    li {
      font-size: 1.9rem;
      line-height: 3.9rem;
      letter-spacing: -0.01rem;
      margin-left: 5rem;
    }
  }
`
