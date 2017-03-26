import { connect } from 'react-redux';
import GameScore from '../components/GameScore';

const mapStateToProps = state => ({ currentScore: state.game.currentScore });

export default connect(mapStateToProps)(GameScore);
