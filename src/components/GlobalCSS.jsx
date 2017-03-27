import React from 'react';
import { colors } from '../constants';

const GlobalCSS = () => (
  <div>
    <style jsx global>{`
      body {
        margin: 0;
      }

      #root {
        align-items: center;
        background-color: ${colors.black};
        display: flex;
        justify-content: center;
        height: 100vh;
        margin: 0;
        width: 100vw;
      }
    `}</style>
  </div>
);

export default GlobalCSS;
