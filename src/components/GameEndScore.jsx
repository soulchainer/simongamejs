import PropTypes from 'prop-types';
import React from 'react';
import { GameEndScoreCSS } from '../styles/gameEndScore';

const GameEndScore = ({ highScore, lastEndScore }) => (
  <div className="GameEndScore">
    <div className="GameEndScore-totalScore u-textOutline">Score: { lastEndScore }</div>
    <div className="GameEndScore-highScore u-textOutline">High score: { highScore }</div>
    <style jsx>{GameEndScoreCSS}</style>
  </div>
);

GameEndScore.propTypes = {
  highScore: PropTypes.number.isRequired,
  lastEndScore: PropTypes.number.isRequired,
};

export default GameEndScore;
