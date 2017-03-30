import React, { PropTypes } from 'react';
import SelectGameMode from './SelectGameMode';
import Slider from './Slider';
import Toggle from './Toggle';

const SettingsOptions = ({
  gameMode,
  gameSpeed,
  sound,
  strictMode,
  onGameModeChange,
  onGameSpeedChange,
  onMaxTonesChange,
  onStrictModeChange,
  onSoundChange }) =>
(
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
    <Toggle id="max" label="No Limit Mode" onChange={onMaxTonesChange} />
    <Slider
      id="max"
      label="Game Speed"
      onChange={speed => onGameSpeedChange(speed)}
      min="0.25"
      max="3"
      value={gameSpeed}
      step="0.25"
    />
  </form>
);

SettingsOptions.propTypes = {
  gameMode: PropTypes.string.isRequired,
  gameSpeed: PropTypes.string.isRequired,
  sound: PropTypes.bool.isRequired,
  strictMode: PropTypes.bool.isRequired,
  onGameModeChange: PropTypes.func.isRequired,
  onGameSpeedChange: PropTypes.func.isRequired,
  onMaxTonesChange: PropTypes.func.isRequired,
  onSoundChange: PropTypes.func.isRequired,
  onStrictModeChange: PropTypes.func.isRequired,
};

export default SettingsOptions;
