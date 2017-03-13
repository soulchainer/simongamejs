import { connect } from 'react-redux';
import { musicButtonOn, musicButtonOff } from '../actions/index';
import SimonButtonGroup from '../components/SimonButtonGroup';

const mapStateToProps = (state) => {
  console.log(state); // eslint-disable-line
  return { simonButtons: state.simonButtons };
};

const mapDispatchToProps = dispatch => (
  {
    onSimonButtonMouseDown: (id) => {
      dispatch(musicButtonOn(id));
    },
    onSimonButtonMouseLeave: (active, id) => {
      if (active) {
        dispatch(musicButtonOff(id));
      }
    },
    onSimonButtonMouseUp: (id) => {
      dispatch(musicButtonOff(id));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SimonButtonGroup);
