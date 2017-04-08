import { connect } from 'react-redux';
import GameEndScore from '../components/GameEndScore';

const mapStateToProps = state => ({
  highScore: state.game.highScores[state.game.mode],
  lastEndScore: state.game.lastEndScore,
});

export default connect(mapStateToProps)(GameEndScore);
