import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../constants';

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
    <style jsx>{`
      label {
        display: block;
        margin-bottom: .5rem;
      }

      input {
        -webkit-appearance: none;
        background-color: transparent; /* remove Chrome ugly background color */
        cursor: pointer;
        height: 20px;
        margin: 0;
        width: 100%;
      }

      input:focus {
        outline: none;
      }

      input::-moz-focus-outer { /* remove the ugly dotted outline in Firefox */
        border: 0;
      }

      /*
        style the thumb, the knob the user can move within the track of the
        range input
      */
      input::-moz-range-thumb {
        background-color: transparent;
        background-image: url("static/images/simon.svg");
        background-size: cover;
        border: none;
        cursor: ew-resize;
        height: 20px;
        width: 20px;
      }

      input::-webkit-slider-thumb {
        -webkit-appearance: none;
        background-color: transparent;
        background-image: url("static/images/simon.svg");
        background-size: cover;
        border: none;
        cursor: ew-resize;
        height: 20px;
        position: relative;
        top: calc((20px - 100%) / -2);
        width: 20px;
      }

      input::-ms-thumb {
        margin: 1px;
      }

      /* style the track of the range input */
      input::-moz-range-track {
        background-color: ${colors.white};
        border: 1px solid transparent;
        border-radius: 5px;
      }

      input::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        background-color: ${colors.white};
        background-image: linear-gradient(
          to right,
          ${colors.green},
          ${colors.green} 20%,
          ${colors.red} 25%,
          ${colors.red} 45%,
          ${colors.yellow} 50%,
          ${colors.yellow} 70%,
          ${colors.blue} 75%
        );
        border: 1px solid ${colors.white};
        border-radius: 5px;
        height: 5px;
      }

      input::-ms-track {
        background-color: ${colors.white};
        border: 1px solid transparent;
        border-radius: 5px;
        color: transparent;
        height: 5px;
        padding: 0;
      }

      /* style the progress of the range input */
      input::-moz-range-progress {
        background-image: linear-gradient(
          to right,
          ${colors.green},
          ${colors.green} 20%,
          ${colors.red} 25%,
          ${colors.red} 45%,
          ${colors.yellow} 50%,
          ${colors.yellow} 70%,
          ${colors.blue} 75%
        );
        border-radius: 5px;
      }

      input::-ms-fill-lower {
        background-image: linear-gradient(
          to right,
          ${colors.green},
          ${colors.green} 20%,
          ${colors.red} 25%,
          ${colors.red} 45%,
          ${colors.yellow} 50%,
          ${colors.yellow} 70%,
          ${colors.blue} 75%
        );
        border-radius: 5px;
      }

      /* hide the native tooltip in IE/Edge */
      input::-ms-tooltip {
        display: none;
      }
    `}</style>
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
