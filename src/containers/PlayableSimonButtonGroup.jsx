import { connect } from 'react-redux';
import { playButtonSound, stopButtonSound } from '../actions/index';
import SimonButtonGroup from '../components/SimonButtonGroup';
import audio from '../utils/audio';

const mapStateToProps = (state) => {
  console.log(state); // eslint-disable-line
  return { simonButtons: state.simonButtons };
};

const mapDispatchToProps = dispatch => (
  {
    onSimonButtonMouseDown: (id) => {
      dispatch(playButtonSound(audio, id));
    },
    onSimonButtonMouseLeave: (active, id) => {
      dispatch(stopButtonSound(active, audio, id));
    },
    onSimonButtonMouseUp: (active, id) => {
      dispatch(stopButtonSound(active, audio, id));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SimonButtonGroup);
