import React, { Component } from 'react';
import ElasticButtonLink from '../components/ElasticButtonLink';
import Settings from '../containers/Settings';
import withTransition from '../hocs/withTransition';

class SettingsScreen extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="SettingsScreen">
        <Settings />
        <ElasticButtonLink id="mainmenu" label="Main menu" to="/" />
      </div>
    );
  }
}

export default withTransition(SettingsScreen, { playBackwards: true });
