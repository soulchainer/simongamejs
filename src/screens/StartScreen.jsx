import React from 'react';
import AnimatedTitle from '../components/AnimatedTitle';
import WrappedLink from '../components/WrappedLink';

const StartScreen = () => (
  <div>
    <AnimatedTitle />
    <ul>
      <li><WrappedLink label="Play" to="/game" /></li>
      <li><WrappedLink label="Settings" to="/settings" /></li>
      <li><WrappedLink label="Credits" to="/credits" /></li>
    </ul>
  </div>
);

export default StartScreen;
