import PropTypes from 'prop-types';
import React from 'react';
import { SliderCSS } from '../styles/slider';

const Slider = ({ id, children, onChange, min, max, value, step }) => (
  <div className="Slider">
    <label htmlFor={id}>{children}</label>
    <input
      type="range"
      id={id}
      min={min}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
    />
    <style jsx>{SliderCSS}</style>
  </div>
);

Slider.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  step: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Slider.defaultProps = {
  children: null,
};

export default Slider;
