import React from 'react';
import ButtonLink from '../components/ButtonLink';
import withTransition from '../hocs/withTransition';
import { colors } from '../constants';

const NotFoundScreen = () => (
  <div className="NotFoundScreen">
    <h1>page not found</h1>
    <nav>
      <ButtonLink id="mainmenu" label="Main menu" to="/" />
    </nav>
    <style jsx>{`
      .NotFoundScreen {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
      }

      h1 {
        color: ${colors.white};
        font-weight: 500;
        letter-spacing: .1em;
        text-align: center;
        width: 90%;
        word-spacing: .5em;
      }

      nav {
        align-items: center;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </div>
);

export default withTransition(NotFoundScreen);
