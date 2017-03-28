import React from 'react';
import { Link } from 'react-router-dom';
import Settings from '../containers/Settings';

const SettingsScreen = () => (
  <div>
    <Settings />
    <Link to="/">Home</Link>
  </div>
);

export default SettingsScreen;
