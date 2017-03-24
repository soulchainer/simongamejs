import React from 'react';
import {
  buttonBorder as border,
  colors,
  CPU_TONE_DURATION,
  USER_TONE_FADE_DURATION } from '../constants';
// import createAnimations from '../utils/create-music-button-animations';

const SimonButton = ({ active, cpuActive, id, onMouseDown, onMouseLeave, onMouseUp }) => (
  <div
    className={`SimonButton--${id}${(active) ? ' is-active' : ''}${(cpuActive) ? ' is-cpu-active' : ''}`}
    onMouseDown={onMouseDown}
    onMouseLeave={onMouseLeave}
    onMouseUp={onMouseUp}
  >
    <style jsx>{`
      div {
        box-sizing: border-box;
        height: 50%;
        position: relative;
        width: 50%;
      }

      .SimonButton--green {
        color: ${colors.green};
        background-color: currentcolor;
        border-top-left-radius: ${border.radius};
        border-width: 0 ${border.width} ${border.width} 0;
      }

      .SimonButton--red {
        color: ${colors.red};
        background-color: currentcolor;
        border-top-right-radius: ${border.radius};
        border-width: 0 0 ${border.width} ${border.width};
      }

      .SimonButton--yellow {
        color: ${colors.yellow};
        background-color: currentcolor;
        border-bottom-left-radius: ${border.radius};
        border-width: ${border.width} ${border.width} 0 0;
      }

      .SimonButton--blue {
        color: ${colors.blue};
        background-color: currentcolor;
        border-bottom-right-radius: ${border.radius};
        border-width: ${border.width} 0 0 ${border.width};
      }

      .is-active {
        animation-name: user-activated;
        animation-duration: ${USER_TONE_FADE_DURATION}s;
        animation-fill-mode: forwards;
      }

      .is-cpu-active {
        animation-name: cpu-activated;
        animation-duration: ${CPU_TONE_DURATION}s;
        animation-fill-mode: forwards;
      }

      @keyframes cpu-activated {
        0%, 100% {
          transform: perspective(800px);
          z-index: 2;
        }
        50% {
          box-shadow: 0 0 2vmin 1vmin #fff, 0 0 2vmin 2vmin currentcolor;
          transform: perspective(800px) translateZ(4vmin);
          z-index: 2;
        }
      }

      @keyframes user-activated {
        from {
          transform: perspective(800px);
          z-index: 2;
        }
        to {
          box-shadow: 0 0 2vmin 1vmin #fff, 0 0 2vmin 2vmin currentcolor;
          transform: perspective(800px) translateZ(4vmin);
          z-index: 2;
        }
      }
    `}</style>
  </div>
);

export default SimonButton;
