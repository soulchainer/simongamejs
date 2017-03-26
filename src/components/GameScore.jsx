import React, { PropTypes } from 'react';

const GameScore = ({ currentScore }) => (
  <div>
    {currentScore}
  </div>
);

GameScore.propTypes = {
  currentScore: PropTypes.number.isRequired,
};

export default GameScore;
