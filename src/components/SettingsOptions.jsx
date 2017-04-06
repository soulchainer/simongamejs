import React, { Component, PropTypes } from 'react';
import SelectGameMode from './SelectGameMode';
import Slider from './Slider';
import Toggle from './Toggle';
import getTransitionAnimation from '../utils/animation';

class SettingsOptions extends Component {
  componentDidMount() {
    const onLoadAnimation = getTransitionAnimation();
    onLoadAnimation.playBackward();
  }

  render() {
    const { gameMode,
            gameSpeed,
            sound,
            strictMode,
            onGameModeChange,
            onGameSpeedChange,
            onMaxMovesChange,
            onStrictModeChange,
            onSoundChange } = this.props;
    return (
      <form>
        <SelectGameMode selected={gameMode} onChange={onGameModeChange} />
        <Toggle
          id="strict"
          label="Strict Mode"
          checked={strictMode}
          onChange={onStrictModeChange}
        />
        <Toggle
          id="sound"
          label="Sound"
          checked={sound}
          disabled={gameMode === 'listen'}
          onChange={onSoundChange}
        />
        <Toggle id="max" label="No Limit Mode" onChange={onMaxMovesChange} />
        <Slider
          id="max"
          label="Game Speed"
          onChange={speed => onGameSpeedChange(speed)}
          min="1"
          max="3"
          value={gameSpeed}
          step="0.25"
        />
      </form>
    );
  }
}

SettingsOptions.propTypes = {
  gameMode: PropTypes.string.isRequired,
  gameSpeed: PropTypes.string.isRequired,
  sound: PropTypes.bool.isRequired,
  strictMode: PropTypes.bool.isRequired,
  onGameModeChange: PropTypes.func.isRequired,
  onGameSpeedChange: PropTypes.func.isRequired,
  onMaxMovesChange: PropTypes.func.isRequired,
  onSoundChange: PropTypes.func.isRequired,
  onStrictModeChange: PropTypes.func.isRequired,
};

export default SettingsOptions;
