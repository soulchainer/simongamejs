import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../constants';

const GameEndScore = ({ highScore, lastEndScore }) => (
  <div className="GameEndScore">
    <div className="GameEndScore-totalScore u-textOutline">Score: { lastEndScore }</div>
    <div className="GameEndScore-highScore u-textOutline">High score: { highScore }</div>
    <style jsx>{`
      .GameEndScore {
        color: ${colors.green};
        font-family: 'Francois One', sans-serif;
        font-size: 1.4rem;
        letter-spacing: .1em;
        text-align: center;
      }
    `}</style>
  </div>
);

GameEndScore.propTypes = {
  highScore: PropTypes.number.isRequired,
  lastEndScore: PropTypes.number.isRequired,
};

export default GameEndScore;
