import PropTypes from 'prop-types';
import React from 'react';
import { colors } from '../constants';

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
    <style jsx>{`
      .ToggleButton {
        perspective: 800px;
      }

      input {
        height: 100%;
        left: 0;
        margin: 0;
        opacity: 0;
        position: absolute;
        width: 100%;
      }

      .ToggleButton-label {
        color: ${colors.white};
        display: block;
        letter-spacing: .1em;
        position: relative;
        text-align: center;
        transform-style: preserve-3d;
        transition: transform .4s;
      }

      input:checked~.ToggleButton-label {
        transform: rotateX(180deg);
      }

      .face {
        backface-visibility: hidden;
        display: inline-block;
        left: 0;
        line-height: 2rem;
        padding: .5rem;
        width: 100%;
      }
      
      .front {
        background-color: ${colors.blue};
      }

      .back {
        background-color: ${colors.green};
        position: absolute;
        transform: rotateX(180deg);
      }
    `}</style>
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
