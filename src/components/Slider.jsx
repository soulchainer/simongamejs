import PropTypes from 'prop-types';
import React from 'react';

const Slider = ({ className, id, label, onChange, min, max, value, step }) => (
  <div className={`Slider ${className}`}>
    <label htmlFor={id}>{label}</label>
    <input
      type="range"
      id={id}
      min={min}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
    />
    <style jsx>{`
      .SettingsOptions-option {
        margin-bottom: 1rem;
      }
    `}</style>
  </div>
);

Slider.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Slider.defaultProps = {
  className: '',
};

export default Slider;
