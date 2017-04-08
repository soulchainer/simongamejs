import React, { PropTypes } from 'react';

const GameEndScore = ({ highScore, lastEndScore }) => (
  <div>
    <div>{ lastEndScore }</div>
    <div>{ highScore }</div>
  </div>
);

GameEndScore.propTypes = {
  highScore: PropTypes.number.isRequired,
  lastEndScore: PropTypes.number.isRequired,
};

export default GameEndScore;
