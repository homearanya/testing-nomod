// HeroImage.js
import React, { useState, useEffect, useRef } from 'react'

import { useLocaleState } from '../../context/locale-context'

import brushImage from '../../images/brush.png'
import cardHandChimeImage from '../../images/card-hand-chime.png'
import cardHandMonzoImage from '../../images/card-hand-monzo.png'
import cupcakeImage from '../../images/cupcake.png'
import dots1Image from '../../images/dots-1.png'
import dots2Image from '../../images/dots-2.png'
import elements4Image from '../../images/elements-4.png'
import phoneHandImage from '../../images/phone-hand.png'
import shoeImage from '../../images/shoe.png'
import sleepImage from '../../images/sleep.png'
import wavesImage from '../../images/waves.png'

import { Wrapper } from './hero-image.styled'

const HeroImage = () => {
  const localeState = useLocaleState()
  const { index, locales } = localeState
  const locale = locales[index].locale

  const imgRef1 = useRef<HTMLImageElement>(null)
  const imgRef2 = useRef<HTMLImageElement>(null)
  const imgRef3 = useRef<HTMLImageElement>(null)
  const imgRef4 = useRef<HTMLImageElement>(null)
  const imgRef5 = useRef<HTMLImageElement>(null)
  const imgRef6 = useRef<HTMLImageElement>(null)
  const imgRef7 = useRef<HTMLImageElement>(null)
  const imgRef8 = useRef<HTMLImageElement>(null)
  const imgRef9 = useRef<HTMLImageElement>(null)
  const imgRef10 = useRef<HTMLImageElement>(null)
  const [loadCount, setLoadCount] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const updateLoaded = () => {
    setLoadCount(loadCount => loadCount + 1)
  }
  useEffect(() => {
    if (imgRef1.current?.complete) {
      updateLoaded()
    }
    if (imgRef2.current?.complete) {
      updateLoaded()
    }
    if (imgRef3.current?.complete) {
      updateLoaded()
    }
    if (imgRef4.current?.complete) {
      updateLoaded()
    }
    if (imgRef5.current?.complete) {
      updateLoaded()
    }
    if (imgRef6.current?.complete) {
      updateLoaded()
    }
    if (imgRef7.current?.complete) {
      updateLoaded()
    }
    if (imgRef8.current?.complete) {
      updateLoaded()
    }
    if (imgRef9.current?.complete) {
      updateLoaded()
    }
    if (imgRef10.current?.complete) {
      updateLoaded()
    }
  }, [])
  useEffect(() => {
    if (loadCount === 10) {
      setLoaded(true)
    }
  }, [loadCount])

  // logic to fix rehydration issue
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true)
  }, [])

  return (
    <Wrapper className={loaded ? 'image-loaded' : ''}>
      <img
        src={brushImage}
        alt="brush"
        className="brush"
        ref={imgRef1}
        decoding="async"
        onLoad={updateLoaded}
      />
      {isClient ? (
        <img
          src={locale === 'en-gb' ? cardHandMonzoImage : cardHandChimeImage}
          alt={locale === 'en-gb' ? 'Card Hamd Monzo' : 'Card Hand Chime'}
          className="card-hand-chime"
          ref={imgRef2}
          decoding="async"
          onLoad={updateLoaded}
        />
      ) : null}
      <img
        src={cupcakeImage}
        alt="Cupcake"
        className="cupckake"
        ref={imgRef3}
        decoding="async"
        onLoad={updateLoaded}
      />
      <img
        src={dots1Image}
        alt="dots-1"
        className="dots-1"
        ref={imgRef4}
        decoding="async"
        onLoad={updateLoaded}
      />
      <img
        src={dots2Image}
        alt="dots-2"
        className="dots-2"
        ref={imgRef5}
        decoding="async"
        onLoad={updateLoaded}
      />
      <img
        src={elements4Image}
        alt="ripple"
        className="ripple"
        ref={imgRef6}
        decoding="async"
        onLoad={updateLoaded}
      />
      <img
        src={phoneHandImage}
        alt="phone on hand"
        className="phone-on-hand"
        ref={imgRef7}
        decoding="async"
        onLoad={updateLoaded}
      />
      <img
        src={shoeImage}
        alt="shoe"
        className="shoe"
        decoding="async"
        onLoad={updateLoaded}
        ref={imgRef8}
      />
      <img
        src={sleepImage}
        alt="sleeping"
        className="sleeping"
        ref={imgRef9}
        decoding="async"
        onLoad={updateLoaded}
      />
      <img
        src={wavesImage}
        alt="waves"
        className="waves"
        ref={imgRef10}
        decoding="async"
        onLoad={updateLoaded}
      />
    </Wrapper>
  )
}

export default HeroImage
