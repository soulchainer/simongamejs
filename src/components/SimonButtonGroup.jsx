import React from 'react';
import { colors } from '../constants';
import SimonButton from './SimonButton';

const SimonButtonGroup = ({ simonButtons }) => (
  <div className="board">
    <div className="inner-board">
      {simonButtons.map(simonButton => (
        <SimonButton
          active={simonButton.active}
          id={simonButton.id}
          key={simonButton.id}
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
    `}</style>
  </div>
);

export default SimonButtonGroup;
