import PropTypes from 'prop-types';
import React from 'react';
import { gameModes as modes } from '../constants';

const SelectGameMode = ({ onChange, selected }) => (
  <select
    className="SelectGameMode"
    onChange={onChange}
    value={selected}
  >
    {modes.map(mode => <option key={mode} value={mode}>{mode}</option>)}
    <style jsx>{`
      .SelectGameMode {
        font-family: 'Titillium Web', sans-serif;
        font-size: 1rem;
      }
    `}</style>
  </select>
);

SelectGameMode.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default SelectGameMode;
