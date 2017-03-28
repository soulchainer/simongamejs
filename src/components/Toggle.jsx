import React, { PropTypes } from 'react';

const Toggle = ({ id, label, onChange }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input
      type="checkbox"
      id={id}
      onChange={onChange}
    />
  </div>
);

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Toggle;
