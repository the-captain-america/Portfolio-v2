import React from 'react'
import styled, { css } from 'styled-components'
import sound from './assets/grogu.mp3'
import useSound from 'use-sound'

const grogu = {
  green: '#8c9170',
  clothColor: '#a9a882',
  glareColor: 'white',
}

const GroguContainer = styled.div`
  position: fixed;
  right: -200px;
  bottom: 300px;
  transition: all 2s ease-in-out;
  ${(props) =>
    props.isActive &&
    css`
      right: -80px;
      transform: rotate(-34deg);
    `};
  .baby-yoda {
    /* height: calc(80 * var(100));
    width: calc(80 * var(100)); */
    height: 160px;
    width: 160px;
    position: relative;
  }

  .baby-yoda *,
  .baby-yoda *::after,
  .baby-yoda *::before {
    position: absolute;
  }

  .baby-yoda .face {
    width: 40%;
    height: 27%;
    margin: auto;
    top: 20%;
    left: 0;
    right: 0;
    border-radius: 50%;
    background-color: #b2da93;
  }

  .face .eye {
    width: 25%;
    height: 31%;
    border-radius: 50%;
    background-color: black;
    z-index: 100;
  }

  .face .eye.left {
    top: 47%;
    left: 16%;
  }

  .face .eye.right {
    top: 43%;
    right: 13%;
  }

  .face .eye::before,
  .face .eye::after {
    content: '';
    border-radius: 50%;
    background-color: ${grogu.glareColor};
  }

  .face .eye::before {
    width: 18%;
    height: 20%;
    top: 30%;
    left: 15%;
  }

  .face .eye::after {
    content: '';
    width: 8%;
    height: 9%;
    top: 45%;
    left: 35%;
  }

  .baby-yoda .ear {
    background-color: #b2da93;
  }

  .baby-yoda .ear.left {
    top: 27%;
    left: 2%;
    width: 56%;
    height: 15%;
    transform: rotate(-10deg);
    border-radius: 0 50% 0 50% / 0 100% 0 100%;
  }

  .baby-yoda .ear.right {
    top: 25%;
    left: 42%;
    width: 56%;
    height: 15%;
    transform: rotate(10deg);
    border-radius: 50% 0 50% 0 / 100% 0 100% 0;
  }

  .baby-yoda .ear::after {
    content: '';
    width: 46%;
    height: 70%;
    background: #f4a593;
    top: 10%;
  }

  .baby-yoda .ear.left::after {
    left: 4%;
    border-radius: 0 33% 0 80% / 0 100% 0 100%;
  }

  .baby-yoda .ear.right::after {
    right: 4%;
    border-radius: 33% 0 80% 0/ 100% 0 100% 0;
  }

  .baby-yoda .baby-yoda-body {
    width: 51%;
    height: 41%;
    top: 41%;
    left: 25%;
  }

  .baby-yoda-body .robe {
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .robe .collar {
    background-color: ${grogu.clothColor};
    z-index: 200;
  }

  .robe .collar.lg {
    width: 51%;
    height: 28%;
    top: 2%;
    left: 34%;
    border-radius: 33% 13% 85% 15% / 43% 7% 52% 8%;
    box-shadow: ${grogu.green};
  }

  .robe .collar.sm {
    width: 34%;
    height: 26%;
    top: 0%;
    left: 14%;
    border-radius: 95% 5% 70% 0% / 52% 10% 33% 46%;
    transform: rotate(7deg);
    box-shadow: ${grogu.green};
  }

  .robe .front {
    width: 83%;
    height: 94%;
    top: 3%;
    left: 8%;
    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    background-color: ${grogu.clothColor};
    z-index: 100;
  }

  .robe .sleeve {
    background-color: ${grogu.clothColor};
    width: 15%;
    height: 30%;
  }

  .robe .sleeve::after {
    content: '';
    background: ${grogu.green};
    display: block;
    height: 100%;
    width: 33%;
  }

  .robe .sleeve.left {
    top: 21%;
    left: 7%;
    border-radius: 70% 0 0 0 / 100% 0 0 0;
    transform: rotate(27deg);
  }

  .robe .sleeve.left::after {
    right: 0;
  }

  .robe .sleeve.right {
    top: 21%;
    right: 8%;
    border-radius: 0 70% 0 0 / 0 100% 0 0;
    transform: rotate(-27deg);
  }

  .robe .sleeve.right::after {
    left: 0;
  }

  .robe .placket {
    height: 95%;
    width: 2%;
    top: 2%;
    background-color: ${grogu.green};
    left: 50%;
    border-radius: 35%;
    z-index: 100;
  }

  .baby-yoda-body .hand {
    width: 12%;
    height: 23%;
    top: 45%;
    border-radius: 77% 23% 58% 42% / 42% 32% 68% 58%;
    background: radial-gradient(ellipse at 69% bottom, transparent 28%, #b2da93)
      25%;
  }

  .baby-yoda-body .hand.left {
    left: 4%;
  }

  .baby-yoda-body .hand.right {
    right: 5%;
    transform: scaleX(-1);
  }
`

const Grogu = ({ isActive }) => {
  const [play] = useSound(sound)
  return (
    <GroguContainer onClick={play} isActive={isActive}>
      <div className="baby-yoda">
        <div className="face">
          <div className="eye left"></div>
          <div className="eye right"></div>
        </div>
        <div className="ear left"></div>
        <div className="ear right"></div>
        <div className="baby-yoda-body">
          <div className="robe">
            <div className="collar lg"></div>
            <div className="collar sm"></div>
            <div className="front"></div>
            <div className="sleeve left"></div>
            <div className="sleeve right"></div>
            <div className="placket"></div>
          </div>
          <div className="hand left"></div>
          <div className="hand right"></div>
        </div>
      </div>
    </GroguContainer>
  )
}
export { Grogu }
