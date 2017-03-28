import React, { PropTypes } from 'react';

const Slider = ({ id, label, onChange, min, max, value, step }) => (
  <div>
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
  </div>
);

Slider.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Slider;
