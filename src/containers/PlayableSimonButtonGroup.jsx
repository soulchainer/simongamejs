import { connect } from 'react-redux';
import { handleSimonButton,
         startGame,
         stopButtonSound } from '../actions/index';
import SimonButtonGroup from '../components/SimonButtonGroup';

const mapStateToProps = (state) => {
  console.log(state); // eslint-disable-line
  return {
    allowUserInteraction: state.simonButtons.allowUserInteraction,
    simonButtons: state.simonButtons.buttons,
  };
};

const mapDispatchToProps = dispatch => (
  {
    onSimonButtonMouseDown: (id) => {
      dispatch(handleSimonButton(id));
    },
    onSimonButtonMouseLeave: (active, id) => {
      dispatch(stopButtonSound(active, id));
    },
    onSimonButtonMouseUp: (active, id) => {
      dispatch(stopButtonSound(active, id));
    },
    startGame: () => dispatch(startGame()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SimonButtonGroup);
