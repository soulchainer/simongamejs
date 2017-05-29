import { colors, ERROR_MOVE_DURATION } from '../constants';

export const SimonButtonGroupCSS = `
  .SimonButtonGroup {
    border-radius: 100%;
    box-shadow: .3rem .4rem ${colors.shadow};
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    height: 50vmin;
    margin: 5vh 0;
    width: 50vmin;
  }

  .is-disabled-interaction {
    pointer-events: none;
  }

  .is-playing-error {
    animation-duration: ${ERROR_MOVE_DURATION}s;
    animation-fill-mode: forwards;
    animation-name: shake;
    animation-timing-function: cubic-bezier(.175, .885, .32, 1.275);
  }

  @keyframes shake {
    from, to {
      transform: translate3d(0, 0, 0);
    }

    5%, 25%, 45%, 65%, 85% {
      transform: translate3d(-2vmin, -1vmin, 0);
    }

    10%, 30%, 50%, 70%, 90% {
      transform: translate3d(-4vmin, 0, 0);
    }

    15%, 35%, 55%, 75% {
      transform: translate3d(2vmin, 1vmin, 0);
    }

    20%, 40%, 60%, 80% {
      transform: translate3d(4vmin, 0, 0);
    }
  }
`;
