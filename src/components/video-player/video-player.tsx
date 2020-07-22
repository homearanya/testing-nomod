import React, { CSSProperties } from 'react'
// import { Waypoint } from 'react-waypoint'

import Image from '../image'
import { ImageBlock } from '../../types'

import { Wrapper, Video } from './video-player.styled'

interface VideoPlayerProps {
  readonly videoSrcMp4: string
  readonly videoSrcWebm: string
  readonly width?: string
  readonly height?: string
  readonly loop?: boolean
  readonly imageBlock: ImageBlock
  readonly className?: string
  readonly rest?: CSSProperties
}

const VideoPlayer = ({
  videoSrcMp4,
  videoSrcWebm,
  width = '100%',
  height = 'auto',
  loop = true,
  imageBlock,
  className = '',
  ...rest
}: VideoPlayerProps) => {
  // const videoRef = useRef<HTMLVideoElement | null>(null)
  const { src: imageSrc, alt } = imageBlock
  return (
    <Wrapper
      className={`videoplayer${className ? ` ${className}` : ''}`}
      {...rest}
    >
      <Video
        // ref={videoRef}
        autoPlay
        playsInline
        muted
        loop={loop}
        poster={
          imageSrc && imageSrc.childImageSharp && imageSrc.childImageSharp.fluid
            ? imageSrc.childImageSharp.fluid.src
            : undefined
        }
        width={width}
        height={height}
      >
        <source src={videoSrcWebm} type="video/webm" />
        <source src={videoSrcMp4} type="video/mp4" />
        <Image image={imageSrc} alt={alt} />
      </Video>
      {/* <Waypoint
        onEnter={() => {
          videoRef.current && videoRef.current.play()
        }}
        onLeave={() => videoRef.current && videoRef.current.pause()}
      /> */}
    </Wrapper>
  )
}

export default VideoPlayer
