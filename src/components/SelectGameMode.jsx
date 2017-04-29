import PropTypes from 'prop-types';
import React from 'react';
import { colors, gameModes as modes } from '../constants';

const SelectGameMode = ({ onChange, selected }) => (
  <select
    className="SelectGameMode"
    onChange={onChange}
    value={selected}
  >
    {modes.map(mode => <option key={mode} value={mode}>{mode}</option>)}
    <style jsx>{`
      .SelectGameMode {
        -moz-appearance: none;
        -webkit-appearance: none;
        background-image: url("static/images/chevron-down.svg");
        background-position: calc(100% - .5rem);
        background-repeat: no-repeat;
        background-size: 1.4rem;
        border: none;
        color: ${colors.black};
        font-family: 'Titillium Web', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: .1em;
        line-height: 2rem;
        padding: .5rem;
        text-transform: capitalize;
      }

      .SelectGameMode:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 ${colors.black};
      }

      option {
        background-color: ${colors.white};
        font-weight: 400;
      }
    `}</style>
  </select>
);

SelectGameMode.propTypes = {
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default SelectGameMode;
