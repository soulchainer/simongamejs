import React from 'react';
import GameEndScreenConnected from '../containers/GameEndScreenConnected';
import withTransition from '../hocs/withTransition';

const GameEndScreen = () => <GameEndScreenConnected />;

export default withTransition(GameEndScreen);
