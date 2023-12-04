import React from 'react'
import styled from 'styled-components'
import { media } from '@utils/media'
import { useParallax } from 'react-scroll-parallax'

const ContentContainer = styled.div`
  margin-top: 70px;
  flex: 1 0 auto;
  background: white;

  padding-bottom: 96px;
  padding-left: 16px;
  padding-right: 16px;

  ${media.sm`
    padding-left: 0;
    padding-right: 0;
  `};

  .square {
    position: absolute;
    top: 300px;
    left: -100%;
    width: 500px;
    height: 500px;
    border-radius: 40px;
    background: #6a6cff;
    opacity: 0.6;
    z-index: 0;
    border: 6px solid rgb(71 74 255);
    transform: translateX(100%) rotate(45deg);
    box-shadow: 0 0 0 200px rgb(208 209 255);
    transition: all 0.4s ease-in-out;
  }
  ${media.sm`
  .square {
    left: -50%;
    transform: translateX(50%) rotate(45deg);
  }
  `};
`

const Content = ({ children }) => {
  const parallax = useParallax({
    speed: -60,
  })
  const parallaxSquare = useParallax({
    speed: -10,
  })
  return (
    <ContentContainer ref={parallax.ref} className="content">
      <div ref={parallaxSquare.ref}>
        <div className="square" />
      </div>
      {children}
    </ContentContainer>
  )
}

export { Content }
