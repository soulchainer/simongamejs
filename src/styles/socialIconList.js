export const SocialIconDefCSS = `
  .SocialIconList-definitions {
    display: none;
  }
`;

export const SocialIconCSS = `
  .SocialIconList-icon {
    color: white;
    display: inline-block;
    fill: currentColor;
    fill-opacity: .8;
    height: 3rem;
    margin: 1rem;
    stroke: currentColor;
    stroke-width: 0;
    transition: fill .4s, fill-opacity .4s, transform .4s;
    width: 3rem;
  }

  .SocialIconList-icon:hover {
    fill-opacity: 1;
    transform: scale(1.4);
    transition: fill .4s, fill-opacity .4s, transform .4s;
  }
`;

export const SocialIconListCSS = `
  .SocialIconList-icons {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
`;
