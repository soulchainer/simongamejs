import { connect } from 'react-redux';
import GameCurrentScore from '../components/GameCurrentScore';

const mapStateToProps = state => ({
  currentScore: state.game.currentScore,
});

export default connect(mapStateToProps)(GameCurrentScore);
