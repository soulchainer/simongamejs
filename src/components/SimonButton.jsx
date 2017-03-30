import React, { PropTypes } from 'react';
import {
  buttonBorder as border,
  colors,
  gameModes,
  CPU_MOVE_DURATION,
  NEXT_SEQUENCE_DELAY,
  USER_MOVE_FADE_DURATION } from '../constants';

const colorTransition = `transition: color ${NEXT_SEQUENCE_DELAY * 1000}s;`;

const SimonButton = ({
  active,
  color,
  cpuActive,
  gameMode,
  position,
  onMouseDown,
  onMouseLeave,
  onMouseUp,
}) => (
  <div
    className={`SimonButton--${position} u-${color}${(active) ? ' is-active' : ''}${(cpuActive) ? ' is-cpu-active' : ''}${(gameMode === 'listen') ? ' is-disabled-animation' : ''}`}
    onMouseDown={onMouseDown}
    onMouseLeave={onMouseLeave}
    onMouseUp={onMouseUp}
  >
    <style jsx>{`
      div {
        background-color: currentcolor;
        box-sizing: border-box;
        height: 50%;
        position: relative;
        ${colorTransition}
        width: 50%;
      }

      .u-green {
        color: ${colors.green};
        ${colorTransition}
      }

      .u-red {
        color: ${colors.red};
        ${colorTransition}
      }

      .u-yellow {
        color: ${colors.yellow};
        ${colorTransition}
      }

      .u-blue {
        color: ${colors.blue};
        ${colorTransition}
      }

      .SimonButton--top-left {
        border-top-left-radius: ${border.radius};
        border-width: 0 ${border.width} ${border.width} 0;
      }

      .SimonButton--top-right {
        border-top-right-radius: ${border.radius};
        border-width: 0 0 ${border.width} ${border.width};
      }

      .SimonButton--bottom-left {
        border-bottom-left-radius: ${border.radius};
        border-width: ${border.width} ${border.width} 0 0;
      }

      .SimonButton--bottom-right {
        border-bottom-right-radius: ${border.radius};
        border-width: ${border.width} 0 0 ${border.width};
      }

      .is-active {
        animation-name: user-activated;
        animation-duration: ${USER_MOVE_FADE_DURATION}s;
        animation-fill-mode: forwards;
      }

      .is-cpu-active {
        animation-name: cpu-activated;
        animation-duration: ${CPU_MOVE_DURATION}s;
        animation-fill-mode: forwards;
      }

      .is-cpu-active.is-disabled-animation {
        animation: none;
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

SimonButton.propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  cpuActive: PropTypes.bool.isRequired,
  gameMode: PropTypes.oneOf(gameModes).isRequired,
  position: PropTypes.oneOf([
    'top-left', 'top-right', 'bottom-left', 'bottom-right']).isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
};

export default SimonButton;
