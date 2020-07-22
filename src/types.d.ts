import { FluidObject, FixedObject } from 'gatsby-image'

interface ImageObject {
  readonly childImageSharp?: {
    fluid?: FluidObject | undefined
    fixed?: FixedObject | undefined
  }
  readonly publicURL?: string
}

interface ImageBlock {
  src: ImageObject
  srcSmall?: ImageObject
  alt?: string
  title?: string
}

interface Button {
  text: string
  link: string
  secondary?: boolean
  inverted?: boolean
  onClick?: () => void
}

interface TextBlockData {
  icon?: ImageObject
  heading?: string
  headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text?: string
  paragraphs?: string[]
  align?: string
  storeButtons?: boolean
}

interface Post {
  id: string
  title: {
    title: string
  }
  category: {
    title: string
  }
  slug: string
  tags: string[]
  featuredImage: {
    title: string
    fluid: FluidObject
  }
  body: {
    childMarkdownRemark: {
      excerpt: string
      html: string
    }
  }
  author: {
    name: string
    profilePhoto: {
      title: string
      fluid: FluidObject
    }
  }
}

interface Category {
  title: string
  grid: number
  posts: Post[]
}

interface BlogPageContext {
  mainPost: Post
  frontPosts?: {
    cat: Category
  }[]
  posts?: Post[]
  numPages: number
  currentPage: number
  limit?: number
  skip?: number
  category?: string
  tag?: string
  totalCount?: number
}
