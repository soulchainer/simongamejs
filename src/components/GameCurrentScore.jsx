import React, { PropTypes } from 'react';

const GameCurrentScore = ({ currentScore }) => (
  <div>{ currentScore }</div>
);

GameCurrentScore.propTypes = {
  currentScore: PropTypes.number.isRequired,
};

export default GameCurrentScore;
