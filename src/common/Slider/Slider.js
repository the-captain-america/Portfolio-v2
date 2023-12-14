import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Icon } from '@common/Icon'
import CAR1 from './images/astonmartin.jpg'
import CAR2 from './images/gordonmurray.jpg'
import CAR3 from './images/lambo.jpg'
import CAR4 from './images/porshe.jpeg'

const IMAGES = [
  { url: CAR1, id: 1 },
  { url: CAR2, id: 2 },
  { url: CAR3, id: 3 },
  { url: CAR4, id: 4 },
]

const SliderContainer = styled.div`
  border: 1px solid black;
  max-width: 500px;
  width: 100%;
  max-height: 300px;
  height: 100%;
  display: flex;
`

const SliderBox = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    height: 300px;
  }
  button.control {
    width: 30px;
    position: absolute;
    cursor: pointer;
    border: none;
    transition: background 0.3s ease-in-out;
    &:nth-child(2) {
      background: transparent;
      top: 0;
      bottom: 0;
      left: 0;
    }
    &:nth-child(3) {
      background: transparent;
      top: 0;
      bottom: 0;
      right: 0;
    }
    &:hover {
      background: rgb(0, 0, 0, 0.2);
    }
  }
`
const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 3;
  left: 50%;
  bottom: 15px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
`
const Circle = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid white;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);
  &:first-child {
    margin-left: 0;
  }
  margin-left: 8px;
  ${(props) =>
    props.isActive &&
    css`
      background: white;
    `};
`

const IconContainer = styled.div`
  svg {
    g {
      path {
        fill: black;
      }
    }
  }
`

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const showPrevImage = () => {
    if (imageIndex === 0) {
      setImageIndex(imageUrls.length - 1)
    } else {
      setImageIndex(imageIndex - 1)
    }
  }

  const showNextImage = () => {
    if (imageIndex === imageUrls.length - 1) {
      setImageIndex(0)
    } else {
      setImageIndex(imageIndex + 1)
    }
  }

  const handleClick = (index) => {
    setImageIndex(index)
  }

  const renderCircles = () => {
    if (!imageUrls || !imageUrls.length) return null
    const result = imageUrls.map((item, index) => {
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

  return (
    <SliderBox className="slider">
      <img src={imageUrls[imageIndex].url} />
      <button className="control" onClick={showPrevImage}>
        <IconContainer>
          <Icon name="CHEVRON" />
        </IconContainer>
      </button>
      <button className="control" onClick={showNextImage}>
        <IconContainer>
          <Icon name="CHEVRON" />
        </IconContainer>
      </button>
      <Group>{renderCircles()}</Group>
    </SliderBox>
  )
}

// const Button = styled.button`
//   padding: 10px;
//   background: black;
//   &:nth-child(1n) {
//     background: red;
//   }
//   &:nth-child(2n + 1) {
//     background: blue;
//   }
// `;

const Slider = () => {
  return (
    <SliderContainer className="container">
      <ImageSlider imageUrls={IMAGES} />
    </SliderContainer>
  )
}

export { Slider }
