import { colors } from '../constants';

export const ButtonLinkCSS = `
  .ButtonLink {
    box-shadow: .3rem .3rem ${colors.shadow};
    font-family: 'Francois One', sans-serif;
    font-size: 1.4rem;
    letter-spacing: .1em;
    max-width: 90%;
    text-align: center;
    min-width: 8rem;
  }

  :global(.ButtonLink-link) {
    border: .25rem solid ${colors.shadowWhite};
    color: ${colors.white};
    display: inline-block;
    height: 100%;
    line-height: 2rem;
    padding: .5rem;
    text-decoration: none;
    transition: border-color .1s .4s, background-color .4s;
    width: 100%;
  }

  :global(.ButtonLink-link:hover) {
    background-color: ${colors.yellow};
    border-color: ${colors.yellow};
    color: ${colors.black};
    transition: border-color .1s, background-color .4s .1s;
  }
`;
