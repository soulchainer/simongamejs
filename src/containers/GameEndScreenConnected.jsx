import { connect } from 'react-redux';
import GameEndScreen from '../components/GameEndScreen';

const mapStateToProps = state => ({
  gameStateTitle: (state.game.gameWon) ? 'You Won' : 'Game Over',
  gameWon: state.game.gameWon,
  playButtonLabel: (state.game.gameWon) ? 'New game' : 'Retry',
});

export default connect(mapStateToProps)(GameEndScreen);
