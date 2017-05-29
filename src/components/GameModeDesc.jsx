import PropTypes from 'prop-types';
import React from 'react';
import { gameModes } from '../constants';
import { GameModeDescCSS } from '../styles/gameModeDesc';

const modes = Object.keys(gameModes);

const toggleExpanded = (e) => {
  const baseClass = 'GameModeDesc';
  let classes = e.target.getAttribute('class');
  classes = `${baseClass}${(classes === baseClass) ? ' is-expanded' : ''}`;
  e.target.setAttribute('class', classes);
};

const GameModeDesc = ({ gameMode }) => (
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  <div
    className="GameModeDesc"
    onClick={toggleExpanded}
    role="button"
    tabIndex="0"
  >
    <svg className="icon icon-info" viewBox="0 0 32 32">
      <title>Actual game mode explanation</title>
      <path d="M14 9.5c0-0.825 0.675-1.5 1.5-1.5h1c0.825 0 1.5 0.675 1.5 1.5v1c0 0.825-0.675 1.5-1.5 1.5h-1c-0.825 0-1.5-0.675-1.5-1.5v-1z" />
      <path d="M20 24h-8v-2h2v-6h-2v-2h6v8h2z" />
      <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z" />
    </svg> {gameModes[gameMode]}
    <style jsx>{GameModeDescCSS}</style>
  </div>
  /* eslint-enable jsx-a11y/no-static-element-interactions */
);

GameModeDesc.propTypes = {
  gameMode: PropTypes.oneOf(modes).isRequired,
};

export default GameModeDesc;
