import React, { PropTypes } from 'react';

const GameEndScore = ({ highScore, lastEndScore }) => (
  <div className="GameEndScore">
    <div className="GameEndScore-totalScore">{ lastEndScore }</div>
    <div className="GameEndScore-highScore">{ highScore }</div>
  </div>
);

GameEndScore.propTypes = {
  highScore: PropTypes.number.isRequired,
  lastEndScore: PropTypes.number.isRequired,
};

export default GameEndScore;
