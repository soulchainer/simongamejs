import React, { PropTypes } from 'react';

const GameScore = ({ currentScore, lastEndScore }) => (
  <div>
    { currentScore || lastEndScore }
  </div>
);

GameScore.propTypes = {
  currentScore: PropTypes.number.isRequired,
  lastEndScore: PropTypes.number.isRequired,
};

export default GameScore;
