import React, { PropTypes } from 'react';

const Toggle = ({ id, label, checked, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
    />
  </div>
);

Toggle.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  checked: null,
};

export default Toggle;
