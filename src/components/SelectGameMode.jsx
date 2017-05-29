import PropTypes from 'prop-types';
import React from 'react';
import { gameModes } from '../constants';
import { SelectGameModeCSS } from '../styles/selectGameMode';

const modes = Object.keys(gameModes);

const SelectGameMode = ({ onChange, selected }) => (
  <select
    className="SelectGameMode"
    onChange={onChange}
    value={selected}
  >
    {modes.map(mode => <option key={mode} value={mode}>{mode}</option>)}
    <style jsx>{SelectGameModeCSS}</style>
  </select>
);

SelectGameMode.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default SelectGameMode;
