import React from 'react'
import styled from 'styled-components'
import { media } from '@utils/media'
import { useParallax } from 'react-scroll-parallax'

const ContentContainer = styled.div`
  top: 72px;
  position: relative;
  flex: 1 0 auto;
  background: white;
  padding-bottom: 300px;

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
    display: none;
  }
  ${media.sm`
  .square {
    left: -50%;
    display: block;
    transform: translateX(50%) rotate(45deg);
  }
  `};
`

const Content = ({ children }) => {
  return (
    <ContentContainer className="content">
      <div>
        <div className="square" />
      </div>
      {children}
    </ContentContainer>
  )
}

export { Content }
