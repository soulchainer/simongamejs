import PropTypes from 'prop-types';
import React from 'react';
import SelectGameMode from './SelectGameMode';
import Slider from './Slider';
import ToggleButton from './ToggleButton';
import { MAX_MOVES } from '../constants';

const SettingsOptions = ({
  gameMode,
  gameSpeed,
  maxMoves,
  sound,
  strictMode,
  onGameModeChange,
  onGameSpeedChange,
  onMaxMovesChange,
  onStrictModeChange,
  onSoundChange }) =>
(
  <form className="SettingsOptions">
    <SelectGameMode
      selected={gameMode}
      onChange={onGameModeChange}
    />
    <ToggleButton
      id="strict"
      label="Strict Mode"
      checked={strictMode}
      onChange={onStrictModeChange}
    />
    <ToggleButton
      id="sound"
      label="Sound"
      checked={sound}
      disabled={gameMode === 'listen'}
      onChange={onSoundChange}
    />
    <ToggleButton
      id="max"
      label="Endless Mode"
      checked={maxMoves === 'Infinity'}
      onChange={onMaxMovesChange}
    />
    <Slider
      id="max"
      label="Speed"
      onChange={speed => onGameSpeedChange(speed)}
      min="1"
      max="3"
      value={gameSpeed}
      step="0.25"
    />
    <style jsx>{`
      .SettingsOptions {
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
        max-width: 90vw;
      }

      .SettingsOptions>* {
        margin-bottom: 1rem;
      }
    `}</style>
  </form>
);

SettingsOptions.propTypes = {
  gameMode: PropTypes.string.isRequired,
  gameSpeed: PropTypes.string.isRequired,
  maxMoves: PropTypes.oneOf([MAX_MOVES, 'Infinity']).isRequired,
  sound: PropTypes.bool.isRequired,
  strictMode: PropTypes.bool.isRequired,
  onGameModeChange: PropTypes.func.isRequired,
  onGameSpeedChange: PropTypes.func.isRequired,
  onMaxMovesChange: PropTypes.func.isRequired,
  onSoundChange: PropTypes.func.isRequired,
  onStrictModeChange: PropTypes.func.isRequired,
};

export default SettingsOptions;
