import React, { useState } from 'react'
import {
  SliderContainer,
  SliderBox,
  Group,
  Circle,
  IconContainer,
} from './Slider.styled'
import { Icon } from '@common/Icon'

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const showPrevImage = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1)
    } else {
      setImageIndex(imageIndex - 1)
    }
  }

  const showNextImage = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0)
    } else {
      setImageIndex(imageIndex + 1)
    }
  }

  const handleClick = (index) => {
    setImageIndex(index)
  }

  const renderCircles = () => {
    if (!images || !images.length) return null
    const result = images.map((item, index) => {
      return (
        <Circle
          data-testid={index === imageIndex ? 'active' : 'notactive'}
          onClick={() => handleClick(index)}
          isActive={index === imageIndex}
          key={index}
        ></Circle>
      )
    })
  }

  const renderImages = () => {}

  if (!images || !images.length) return null
  const currentImage = !!images && images[imageIndex].url

  return (
    <SliderContainer data-testid="slider" className="container">
      <SliderBox className="slider">
        <img src={currentImage} alt="Slider Image" />
      </SliderBox>
      <button
        type="button"
        data-testid="prev-button"
        className="control"
        onClick={showPrevImage}
      >
        <IconContainer className="left">
          <Icon name="CHEVRON" />
        </IconContainer>
      </button>
      <button
        type="button"
        data-testid="next-button"
        className="control"
        onClick={showNextImage}
      >
        <IconContainer className="right">
          <Icon name="CHEVRON" />
        </IconContainer>
      </button>
      <Group data-testid="group">{renderCircles()}</Group>
    </SliderContainer>
  )
}

Slider.defaultProps = {
  images: [],
}

export { Slider }
