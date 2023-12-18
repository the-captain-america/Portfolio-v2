import React, { useState } from 'react'
import styled from 'styled-components'
import { CAR1, CAR2, CAR3, CAR4 } from './images'
import { Icon } from '@common/Icon'

const SliderContainer = styled.div`
  max-width: 500px;
  max-height: 300px;
  position: relative;
  button {
    position: absolute;
    width: 30px;
    height: 100%;
    border: none;
    background: transparent;
    &:nth-child(2) {
      top: 0;
      left: 0;
      bottom: 0;
    }
    &:nth-child(3) {
      top: 0;
      right: 0;
      bottom: 0;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`
const SliderBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  img {
    width: 100%;
    transition: all 0.4s ease-in-out;
    height: 300px;
    flex-shrink: 0;
    flex-grow: 0;
  }
`

const IconContainer = styled.div`
  svg {
    g {
      path {
        fill: black;
      }
    }
  }
  &.right {
    transform: rotate(90deg);
  }
  &.left {
    transform: rotate(-90deg);
  }
`

const Slider2 = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const renderImages = () => {
    const result = images.map((item) => {
      return (
        <img
          key={item.id}
          src={item.url}
          style={{ transform: `translateX(${-100 * imageIndex}%)` }}
        />
      )
    })
    return result
  }

  const handlePrev = () => {
    if (!images || !images.length) return null
    if (imageIndex === 0) {
      setImageIndex(images.length - 1)
    } else {
      setImageIndex(imageIndex - 1)
    }
  }
  const handleNext = () => {
    if (!images || !images.length) return null
    if (imageIndex === images.length - 1) {
      setImageIndex(0)
    } else {
      setImageIndex(imageIndex + 1)
    }
  }

  return (
    <SliderContainer>
      <SliderBox>{renderImages()}</SliderBox>
      <button onClick={handlePrev} className="prev-button">
        <IconContainer>
          <Icon className="left" name="CHEVRON" />
        </IconContainer>
      </button>
      <button onClick={handleNext} className="next-button">
        <IconContainer>
          <Icon className="right" name="CHEVRON" />
        </IconContainer>
      </button>
    </SliderContainer>
  )
}

Slider2.defaultProps = {
  images: [{ url: CAR1, id: 1 }],
}

export { Slider2 }
