import React, { PropTypes } from 'react';
import { gameModes as modes } from '../constants';

const SelectGameMode = ({ className, onChange, selected }) => (
  <select
    className={`SelectGameMode ${className}`}
    onChange={onChange}
    value={selected}
  >
    {modes.map(mode => <option key={mode} value={mode}>{mode}</option>)}
    <style jsx>{`
      .SettingsOptions-option {
        margin-bottom: 1rem;
      }
    `}</style>
  </select>
);

SelectGameMode.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

SelectGameMode.defaultProps = {
  className: '',
};

export default SelectGameMode;
