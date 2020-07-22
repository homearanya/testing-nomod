import React, { CSSProperties } from 'react'
import Img, { GatsbyImageProps } from 'gatsby-image'

import { ImageObject } from '../types'

const NonStretchedImage = props => {
  let normalizedProps = props

  if (props.fluid && props.fluid.presentationWidth) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.presentationWidth,
        margin: '0 auto', // Used to center the image
      },
    }
  }

  return <Img {...normalizedProps} />
}

interface ImageProps extends GatsbyImageProps {
  readonly image: ImageObject
  readonly className?: string
  readonly style?: CSSProperties
  props?: React.HTMLAttributes<HTMLDivElement>
}

const Image = ({ image, className, style, ...props }: ImageProps) => {
  return !!image && !!image.childImageSharp ? (
    <NonStretchedImage
      className={className}
      style={style}
      {...props}
      fixed={image.childImageSharp.fixed}
      fluid={image.childImageSharp.fluid}
    />
  ) : !!image && !!image.publicURL ? (
    <img
      src={image.publicURL}
      alt={props.alt}
      className={className}
      style={{ ...style, display: 'inline-block' }}
    />
  ) : null
}

export default Image
