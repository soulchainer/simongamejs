import PropTypes from 'prop-types';
import React from 'react';

const Toggle = ({ className, id, label, checked, disabled, onChange }) => (
  <div className={`Toggle ${className}`}>
    <label htmlFor={id}>{label}</label>
    <input
      type="checkbox"
      id={id}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <style jsx>{`
      .SettingsOptions-option {
        margin-bottom: 1rem;
      }
    `}</style>
  </div>
);

Toggle.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  checked: null,
  className: '',
  disabled: null,
};

export default Toggle;
