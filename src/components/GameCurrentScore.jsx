import PropTypes from 'prop-types';
import React from 'react';

const GameCurrentScore = ({ currentScore }) => (
  <div className="GameCurrentScore">
    { currentScore }
  </div>
);

GameCurrentScore.propTypes = {
  currentScore: PropTypes.number.isRequired,
};

export default GameCurrentScore;
