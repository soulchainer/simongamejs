import {
  buttonBorder as border,
  colors,
  NEXT_SEQUENCE_DELAY,
  USER_MOVE_FADE_DURATION } from '../constants';

export const SimonButtonCSS = `
  div {
    background-color: currentcolor;
    box-sizing: border-box;
    height: 50%;
    position: relative;
    transition: color ${NEXT_SEQUENCE_DELAY}s;
    width: 50%;
  }

  .u-green {
    color: ${colors.green};
    transition: color ${NEXT_SEQUENCE_DELAY}s;
  }

  .u-red {
    color: ${colors.red};
    transition: color ${NEXT_SEQUENCE_DELAY}s;
  }

  .u-yellow {
    color: ${colors.yellow};
    transition: color ${NEXT_SEQUENCE_DELAY}s;
  }

  .u-blue {
    color: ${colors.blue};
    transition: color ${NEXT_SEQUENCE_DELAY}s;
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
`;
