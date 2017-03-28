import { connect } from 'react-redux';
import SettingsOptions from '../components/SettingsOptions';
import { changeGameMode,
         changeGameSpeed,
         toggleMaxTones,
         toggleSound,
         toggleStrictMode } from '../actions/index';

const mapStateToProps = state => (
  {
    gameMode: state.game.mode,
    maxTones: state.tones.maxTones,
    sound: state.game.sound,
    gameSpeed: state.game.speed,
    strictMode: state.game.strict,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onGameModeChange: mode => dispatch(changeGameMode(mode)),
    onGameSpeedChange: speed => dispatch(changeGameSpeed(speed)),
    onMaxTonesChange: () => dispatch(toggleMaxTones()),
    onSoundChange: () => dispatch(toggleSound()),
    onStrictModeChange: () => dispatch(toggleStrictMode()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SettingsOptions);
