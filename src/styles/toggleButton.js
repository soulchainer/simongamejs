import { colors } from '../constants';

export const ToggleButtonCSS = `
  .ToggleButton {
    perspective: 800px;
  }

  input {
    height: 100%;
    left: 0;
    margin: 0;
    opacity: 0;
    position: absolute;
    width: 100%;
  }

  .ToggleButton-label {
    color: ${colors.white};
    display: block;
    letter-spacing: .1em;
    position: relative;
    text-align: center;
    transform-style: preserve-3d;
    transition: transform .4s;
  }

  input:checked~.ToggleButton-label {
    transform: rotateX(180deg);
  }

  .face {
    backface-visibility: hidden;
    box-shadow: .3rem .3rem ${colors.shadow};
    display: inline-block;
    left: 0;
    line-height: 2rem;
    padding: .5rem;
    width: 100%;
  }
  
  .front {
    background-color: ${colors.blue};
  }

  .back {
    background-color: ${colors.green};
    position: absolute;
    transform: rotateX(180deg);
  }
`;
