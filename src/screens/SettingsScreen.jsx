import React from 'react';
import ElasticButtonLink from '../components/ElasticButtonLink';
import Settings from '../containers/Settings';
import Transition from '../components/Transition';

const SettingsScreen = () => (
  <Transition playBackwards>
    <Settings />
    <ElasticButtonLink id="mainmenu" label="Main menu" to="/" />
  </Transition>
);

export default SettingsScreen;
