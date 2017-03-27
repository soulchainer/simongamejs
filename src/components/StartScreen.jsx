import React from 'react';
import WrappedLink from './WrappedLink';

const StartScreen = () => (
  <div>
    <WrappedLink label="Play" to="/game" />
    <WrappedLink label="Settings" to="/settings" />
    <WrappedLink label="Credits" to="/credits" />
  </div>
);

export default StartScreen;
