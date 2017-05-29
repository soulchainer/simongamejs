import { colors } from '../constants';

export const GameModeDescCSS = `
  .GameModeDesc {
    background-color: ${colors.white};
    box-shadow: .3rem .3rem ${colors.shadow};
    color: ${colors.black};
    cursor: help;
    font-family: 'Titillium Web', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: .1em;
    line-height: 2rem;
    max-width: 90vw;
    overflow: hidden;
    padding: .5rem;
    text-overflow: ellipsis;
    width: 250px;
    white-space: nowrap;
  }

  .GameModeDesc.is-expanded {
    white-space: normal;
  }

  .icon {
    color: ${colors.black};
    display: inline-block;
    fill: currentColor;
    height: 1em;
    pointer-events: none;
    stroke-width: 0;
    stroke: currentColor;
    width: 1em;
  }
`;
