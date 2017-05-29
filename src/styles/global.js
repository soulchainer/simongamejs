import { colors } from '../constants';

export default `
  * { box-sizing: border-box; }

  body {
    background-color: ${colors.black};
    margin: 0;
    max-width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    width: 100vw;
  }

  #root {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    opacity: 0;
  }

  .Root {
    align-items: center;
    display: flex;
    font-family: 'Titillium Web', sans-serif;
    height: 100%;
    justify-content: center;
    width: 100vw;
  }
`;
