import React, { Component } from 'react';
import ButtonLink from '../components/ButtonLink';
import Settings from '../containers/Settings';
import { APP_TITLE } from '../constants';
import withTransition from '../hocs/withTransition';

class SettingsScreen extends Component {
  componentDidMount() {
    document.title = `${APP_TITLE} | Settings `;
  }

  render() {
    return (
      <div className="SettingsScreen">
        <Settings />
        <ButtonLink id="mainmenu" label="Main menu" to="/" />
        <style jsx>{`
          .SettingsScreen {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 2rem 0;
          }
        `}</style>
      </div>
    );
  }
}

export default withTransition(SettingsScreen);
