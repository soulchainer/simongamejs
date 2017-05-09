import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
  buttonIds as ids,
  colors as colours,
  gameModes,
  ERROR_MOVE_DURATION } from '../constants';
import SimonButton from './SimonButton';
import { getTransitionAnimation } from '../utils/animation';

class SimonButtonGroup extends Component {
  componentWillMount() {
    this.props.resetGame();
  }

  componentWillReceiveProps(nextProps) {
    const { history, transitionComplete, startGame } = this.props;
    // Start the game only when transition ends
    if (transitionComplete !== nextProps.transitionComplete) startGame();
    // If gameOver, play the transition animation and redirect to /game#gameover
    function onTransitionEnd(finalState) {
      history.push({ pathname: `/game#${finalState}` });
    }
    if (nextProps.gameWon) {
      getTransitionAnimation(onTransitionEnd.bind(this, 'gamewon'), 'reverse').play();
    } else if (nextProps.gameOver) {
      getTransitionAnimation(onTransitionEnd.bind(this, 'gameover'), 'reverse').play();
    }
  }

  componentWillUnmount() {
    // The game route is left (the game ended or user hit Link to StartScreen)
    this.props.onLeaveGame();
  }

  render() {
    const { colors,
            gameMode,
            gameOver,
            gameWon,
            playing,
            simonButtons,
            speed,
            onSimonButtonPressed,
            onSimonButtonReleased } = this.props;
    const gameEnded = gameOver || gameWon;
    const disabledInteraction = 'sequenceerror'.includes(playing) || gameEnded;
    const disableButtons = disabledInteraction ? ' is-disabled-interaction' : '';
    const errorAnimation = (playing === 'error') ? ' is-playing-error' : '';
    const buttons = simonButtons.map((simonButton, index) => (
      <SimonButton
        active={simonButton.active}
        color={colors[index]}
        cpuActive={simonButton.cpuActive}
        gameMode={gameMode}
        key={simonButton.id}
        position={simonButton.position}
        speed={speed}
        onSimonButtonPressed={e => onSimonButtonPressed(e, simonButton.id)}
        onSimonButtonReleased={e => onSimonButtonReleased(e, simonButton.active, simonButton.id)}
      />
    ));

    return (
      <div className={`SimonButtonGroup${disableButtons}${errorAnimation}`}>
        {buttons}
        <style jsx>{`
          .SimonButtonGroup {
            border-radius: 100%;
            box-shadow: .3rem .4rem ${colours.shadow};
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            height: 50vmin;
            margin: 5vh 0;
            width: 50vmin;
          }

          .is-disabled-interaction {
            pointer-events: none;
          }

          .is-playing-error {
            animation-duration: ${ERROR_MOVE_DURATION}s;
            animation-fill-mode: forwards;
            animation-name: shake;
            animation-timing-function: cubic-bezier(.175, .885, .32, 1.275);
          }

          @keyframes shake {
            from, to {
              transform: translate3d(0, 0, 0);
            }

            5%, 25%, 45%, 65%, 85% {
              transform: translate3d(-2vmin, -1vmin, 0);
            }

            10%, 30%, 50%, 70%, 90% {
              transform: translate3d(-4vmin, 0, 0);
            }

            15%, 35%, 55%, 75% {
              transform: translate3d(2vmin, 1vmin, 0);
            }

            20%, 40%, 60%, 80% {
              transform: translate3d(4vmin, 0, 0);
            }
          }
        `}</style>
      </div>
    );
  }
}

SimonButtonGroup.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  colors: PropTypes.arrayOf(PropTypes.oneOf(ids)).isRequired,
  gameMode: PropTypes.oneOf(Object.keys(gameModes)).isRequired,
  gameOver: PropTypes.bool.isRequired,
  gameWon: PropTypes.bool.isRequired,
  playing: PropTypes.oneOf([null, 'sequence', 'error', 'win']),
  simonButtons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOf(ids).isRequired,
    active: PropTypes.bool.isRequired,
    cpuActive: PropTypes.bool.isRequired,
    position: PropTypes.oneOf([
      'top-left', 'top-right', 'bottom-left', 'bottom-right']).isRequired,
  })).isRequired,
  speed: PropTypes.number.isRequired,
  transitionComplete: PropTypes.bool.isRequired,
  onLeaveGame: PropTypes.func.isRequired,
  onSimonButtonPressed: PropTypes.func.isRequired,
  onSimonButtonReleased: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

SimonButtonGroup.defaultProps = {
  playing: null,
};

export default withRouter(SimonButtonGroup);
