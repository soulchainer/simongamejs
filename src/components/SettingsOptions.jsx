import React, { PropTypes } from 'react';

const SettingsOptions = props => (
  <form>
    <label htmlFor="strict">Strict mode</label>
    <input
      type="checkbox"
      id="strict"
      onChange={() => props.onStrictModeChange()}
    />
    <label htmlFor="sound">Sound</label>
    <input
      type="checkbox"
      id="sound"
      onChange={() => props.onSoundChange()}
    />
    <label htmlFor="speed">Game Speed</label>
    <input
      type="range"
      id="speed"
      min="0.25"
      max="3"
      value="1"
      step="0.25"
      onChange={speed => props.onGameSpeedChange(speed)}
    />
    <label htmlFor="max">No Limit</label>
    <input
      type="checkbox"
      id="max"
      onChange={() => props.onMaxTonesChange()}
    />
  </form>
);

SettingsOptions.propTypes = {
  onGameSpeedChange: PropTypes.func.isRequired,
  onMaxTonesChange: PropTypes.func.isRequired,
  onSoundChange: PropTypes.func.isRequired,
  onStrictModeChange: PropTypes.func.isRequired,
};

export default SettingsOptions;
