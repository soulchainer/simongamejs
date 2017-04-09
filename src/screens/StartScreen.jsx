import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import ElasticButtonLink from '../components/ElasticButtonLink';

const StartScreen = () => (
  <div className="StartScreen">
    <header>
      <AnimatedTitle />
    </header>
    <nav className="StartScreen-menu">
      <ul>
        <li><ElasticButtonLink id="play" label="Play" to="/game" /></li>
        <li><ElasticButtonLink id="settings" label="Settings" to="/settings" /></li>
        <li><ElasticButtonLink id="credits" label="Credits" to="/credits" /></li>
      </ul>
    </nav>
    <style jsx>{`
      .StartScreen {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        width: 100%;
      }

      header {
        width: 90%;
      }

      .StartScreen-menu {
        align-items: center;
        display: flex;
        justify-content: center;
      }

      ul {
        align-items: center;
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-top: 5vmin;
        max-width: 80%;
        padding-left: 0;
      }

      li {
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 1rem 0;
      }
    `}</style>
  </div>
);

export default StartScreen;
