import { connect } from 'react-redux';
import { handleSimonButton,
         leaveGame,
         resetGame,
         startGame,
         stopButtonSound } from '../actions/index';
import SimonButtonGroup from '../components/SimonButtonGroup';

const mapStateToProps = (state, ownProps) => (
  {
    colors: state.simonButtons.buttonColors,
    gameMode: state.game.mode,
    gameOver: state.game.gameOver,
    gameWon: state.game.gameWon,
    playing: state.game.playing,
    simonButtons: state.simonButtons.buttons,
    speed: Number(state.game.speed),
    transitionComplete: ownProps.transitionComplete,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onLeaveGame: () => dispatch(leaveGame()),
    onSimonButtonPressed: (e, id) => {
      dispatch(handleSimonButton(id));
    },
    onSimonButtonReleased: (e, active, id) => {
      e.preventDefault();
      dispatch(stopButtonSound(active, id));
    },
    resetGame: () => dispatch(resetGame()),
    startGame: () => dispatch(startGame()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SimonButtonGroup);
