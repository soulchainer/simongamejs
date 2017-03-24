import React, { Component } from 'react';
import { colors } from '../constants';
import SimonButton from './SimonButton';

class SimonButtonGroup extends Component {
  componentDidMount() {
    this.props.startGame();
  }

  render() {
    const { allowUserInteraction,
            onSimonButtonMouseDown,
            onSimonButtonMouseLeave,
            onSimonButtonMouseUp,
            simonButtons } = this.props;
    return (
      <div className={(allowUserInteraction) ? 'board' : 'board is-disabled-interaction'}>
        {simonButtons.map(simonButton => (
          <SimonButton
            active={simonButton.active}
            cpuActive={simonButton.cpuActive}
            id={simonButton.id}
            key={simonButton.id}
            onMouseDown={() => onSimonButtonMouseDown(simonButton.id)}
            onMouseLeave={() => onSimonButtonMouseLeave(simonButton.active, simonButton.id)}
            onMouseUp={() => onSimonButtonMouseUp(simonButton.active, simonButton.id)}
          />
        ))}
        <style jsx>{`
          .board {
            border-radius: 100%;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            height: 70vmin;
            width: 70vmin;
          }

          .is-disabled-interaction {
            pointer-events: none;
          }
        `}</style>

        <style jsx global>{`
          body {
            align-items: center;
            background-color: ${colors.black};
            display: flex;
            justify-content: center;
            height: 100vh;
            margin: 0;
            width: 100vw;
          }
        `}</style>
      </div>
    );
  }
}

export default SimonButtonGroup;
