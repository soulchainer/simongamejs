import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { APP_TITLE, colors } from '../constants';

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
        <style jsx>{`
          .GameCurrentScore {
            color: ${colors.white};
            font-size: 2.4rem;
            font-weight: 700;
            text-shadow: 1px 1px ${colors.shadow}, 2px 2px ${colors.shadow}, 3px 3px ${colors.shadow}, 4px 4px ${colors.shadow}, 5px 5px ${colors.shadow};
          }
        `}</style>
      </div>
    );
  }
}

GameCurrentScore.propTypes = {
  currentScore: PropTypes.number.isRequired,
};

export default GameCurrentScore;
