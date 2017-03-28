import React, { PropTypes } from 'react';
import { gameModes as modes } from '../constants';

const SelectGameMode = ({ onChange, selected }) => (
  <select value={selected} onChange={onChange}>
    {modes.map(mode => <option key={mode} value={mode}>{mode}</option>)}
  </select>
);

SelectGameMode.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default SelectGameMode;
