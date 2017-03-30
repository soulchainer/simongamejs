import React, { PropTypes } from 'react';

const Toggle = ({ id, label, checked, disabled, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      type="checkbox"
      id={id}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  </div>
);

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  checked: null,
  disabled: null,
};

export default Toggle;
