import PropTypes from 'prop-types';
import React from 'react';
import { ToggleButtonCSS } from '../styles/toggleButton';

const ToggleButton = ({ id, label, checked, disabled, onChange }) => (
  <div className="ToggleButton">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <label htmlFor={id} className="ToggleButton-label">
      <span className="face front">{`${label} Off`}</span>
      <span className="face back">{`${label} On`}</span>
    </label>
    <style jsx>{ToggleButtonCSS}</style>
  </div>
);

ToggleButton.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

ToggleButton.defaultProps = {
  checked: null,
  disabled: null,
};

export default ToggleButton;
