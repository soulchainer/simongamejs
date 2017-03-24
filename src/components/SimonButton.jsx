import React from 'react';
import {
  buttonBorder as border,
  colors,
  CPU_TONE_DURATION,
  USER_TONE_FADE_DURATION } from '../constants';
// import createAnimations from '../utils/create-music-button-animations';

const SimonButton = ({ active, cpuActive, id, onMouseDown, onMouseLeave, onMouseUp }) => (
  <div
    className={`${id}${(active) ? ' active' : ''}${(cpuActive) ? ' cpu-active' : ''}`}
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

      .green {
        color: ${colors.green};
        background-color: currentcolor;
        border-top-left-radius: ${border.radius};
        border-width: 0 ${border.width} ${border.width} 0;
      }

      .red {
        color: ${colors.red};
        background-color: currentcolor;
        border-top-right-radius: ${border.radius};
        border-width: 0 0 ${border.width} ${border.width};
      }

      .yellow {
        color: ${colors.yellow};
        background-color: currentcolor;
        border-bottom-left-radius: ${border.radius};
        border-width: ${border.width} ${border.width} 0 0;
      }

      .blue {
        color: ${colors.blue};
        background-color: currentcolor;
        border-bottom-right-radius: ${border.radius};
        border-width: ${border.width} 0 0 ${border.width};
      }

      .active {
        animation-name: user-activated;
        animation-duration: ${USER_TONE_FADE_DURATION}s;
        animation-fill-mode: forwards;
      }

      .cpu-active {
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
