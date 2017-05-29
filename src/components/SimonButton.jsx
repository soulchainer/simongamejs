import PropTypes from 'prop-types';
import React from 'react';
import { gameModes, CPU_MOVE_DURATION } from '../constants';
import { SimonButtonCSS } from '../styles/simonButton';

const SimonButton = ({
  active,
  color,
  cpuActive,
  gameMode,
  position,
  speed,
  onSimonButtonPressed,
  onSimonButtonReleased,
}) => (
  <div
    className={`SimonButton--${position} u-${color}${(active) ? ' is-active' : ''}${(cpuActive) ? ' is-cpu-active' : ''}${(gameMode === 'listen') ? ' is-disabled-animation' : ''}`}
    style={(cpuActive) ? { animationDuration: `${CPU_MOVE_DURATION / speed}s` } : {}}
    onMouseDown={onSimonButtonPressed}
    onMouseLeave={onSimonButtonReleased}
    onMouseUp={onSimonButtonReleased}
    onTouchEnd={onSimonButtonReleased}
    onTouchStart={onSimonButtonPressed}
  >
    <style jsx>{SimonButtonCSS}</style>
  </div>
);

SimonButton.propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  cpuActive: PropTypes.bool.isRequired,
  gameMode: PropTypes.oneOf(Object.keys(gameModes)).isRequired,
  position: PropTypes.oneOf([
    'top-left', 'top-right', 'bottom-left', 'bottom-right']).isRequired,
  speed: PropTypes.number.isRequired,
  onSimonButtonPressed: PropTypes.func.isRequired,
  onSimonButtonReleased: PropTypes.func.isRequired,
};

export default SimonButton;
