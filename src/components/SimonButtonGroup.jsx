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
        <div className="inner-board">
          {simonButtons.map(simonButton => (
            <SimonButton
              active={simonButton.active}
              id={simonButton.id}
              key={simonButton.id}
              onMouseDown={() => onSimonButtonMouseDown(simonButton.id)}
              onMouseLeave={() => onSimonButtonMouseLeave(simonButton.active, simonButton.id)}
              onMouseUp={() => onSimonButtonMouseUp(simonButton.active, simonButton.id)}
            />
          ))}
        </div>
        <style jsx>{`
          .board {
            background-color: ${colors.black};
            border-radius: 100%;
            box-sizing: border-box;
            display: flex;
            height: 80vmin;
            margin: auto;
            top: 10vh;
            width: 80vmin;
          }

          .inner-board {
            border-radius: 100%;
            display: flex;
            flex-wrap: wrap;
            height: 70vmin;
            margin: auto;
            position: relative;
            width: 70vmin;
          }

          .is-disabled-interaction {
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }
}

export default SimonButtonGroup;
