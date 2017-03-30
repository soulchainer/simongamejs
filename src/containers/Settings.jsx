import { connect } from 'react-redux';
import SettingsOptions from '../components/SettingsOptions';
import { handleChangeGameMode,
         handleChangeGameSpeed,
         toggleMaxMoves,
         toggleSound,
         toggleStrictMode } from '../actions/index';

const mapStateToProps = state => (
  {
    gameMode: state.game.mode,
    maxMoves: state.moves.maxMoves,
    sound: state.game.sound,
    gameSpeed: `${state.game.speed}`,
    strictMode: state.game.strict,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onGameModeChange: mode => dispatch(handleChangeGameMode(mode)),
    onGameSpeedChange: speed => dispatch(handleChangeGameSpeed(speed)),
    onMaxMovesChange: () => dispatch(toggleMaxMoves()),
    onSoundChange: () => dispatch(toggleSound()),
    onStrictModeChange: () => dispatch(toggleStrictMode()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SettingsOptions);
