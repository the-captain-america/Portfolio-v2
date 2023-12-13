import React, { useState } from 'react'
import styled from 'styled-components'
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
  border: 2px solid red;
  width: 500px;
  height: 300px;
`

const ImageSlider = ({ imageUrls }) => {
  const [imageIndex, setImageIndex] = useState(0)

  return <img src={imageUrls[imageIndex.url]} />
}

const Slider = () => {
  return (
    <SliderContainer>
      <ImageSlider imageUrls={IMAGES} />
    </SliderContainer>
  )
}

export { Slider }
