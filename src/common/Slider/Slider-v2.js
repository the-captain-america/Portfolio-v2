import React, { useState } from 'react'
import styled, { css } from 'styled-components'
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

const CircleGroup = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  display: flex;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`
const Circle = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 8px;
  border: 2px solid white;
  &:nth-child(1) {
    margin-left: 0;
  }
  ${(props) =>
    props.isActive &&
    css`
      background: white;
    `}
`

const Slider2 = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const handleClick = (index) => {
    setImageIndex(index)
  }

  const renderCircles = () => {
    if (!images || !images.length) return null
    const result = images.map((index) => {
      return (
        <Circle
          onClick={() => handleClick(index)}
          key={index}
          isActive={index === imageIndex}
        ></Circle>
      )
    })
    return result
  }

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
      <CircleGroup>{renderCircles()}</CircleGroup>
    </SliderContainer>
  )
}

Slider2.defaultProps = {
  images: [{ url: CAR1, id: 1 }],
}

export { Slider2 }
