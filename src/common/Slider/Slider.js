import React, { useState } from 'react'
import {
  SliderContainer,
  SliderBox,
  Group,
  Circle,
  IconContainer,
} from './Slider.styled'
import { Icon } from '@common/Icon'

const ImageSlider = ({ images }) => {
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
          onClick={() => handleClick(index)}
          isActive={index === imageIndex}
          key={index}
        ></Circle>
      )
    })
    return result
  }
  const currentImage = !!images && images[imageIndex].url
  return (
    <SliderBox className="slider">
      <img src={currentImage} />
      <button className="control" onClick={showPrevImage}>
        <IconContainer className="left">
          <Icon name="CHEVRON" />
        </IconContainer>
      </button>
      <button className="control" onClick={showNextImage}>
        <IconContainer className="right">
          <Icon name="CHEVRON" />
        </IconContainer>
      </button>
      <Group>{renderCircles()}</Group>
    </SliderBox>
  )
}

const Slider = ({ images }) => (
  <SliderContainer className="container">
    <ImageSlider images={images} />
  </SliderContainer>
)

Slider.defaultProps = {
  images: IMAGES,
}

export { Slider }
