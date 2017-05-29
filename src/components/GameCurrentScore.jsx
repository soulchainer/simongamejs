import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { APP_TITLE } from '../constants';
import { GameCurrentScoreCSS } from '../styles/gameCurrentScore';

class GameCurrentScore extends Component {
  componentDidMount() {
    document.title = `${APP_TITLE} | Playing | Score: ${this.props.currentScore}`;
  }

  componentDidUpdate() {
    document.title = `${APP_TITLE} | Playing | Score: ${this.props.currentScore}`;
  }

  render() {
    const { currentScore } = this.props;
    return (
      <div className="GameCurrentScore">
        { currentScore }
        <style jsx>{GameCurrentScoreCSS}</style>
      </div>
    );
  }
}

GameCurrentScore.propTypes = {
  currentScore: PropTypes.number.isRequired,
};

export default GameCurrentScore;
