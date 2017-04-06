import { connect } from 'react-redux';
import GameScore from '../components/GameScore';

const mapStateToProps = state => ({
  currentScore: state.game.currentScore,
  lastEndScore: state.game.lastEndScore,
});

export default connect(mapStateToProps)(GameScore);
