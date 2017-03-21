import React from 'react';
import { buttonBorder as border, colors } from '../constants';

const SimonButton = ({ active, id, onMouseDown, onMouseLeave, onMouseUp }) => (
  <div
    className={`${id}${(active) ? ' active' : ''}`}
    onMouseDown={onMouseDown}
    onMouseLeave={onMouseLeave}
    onMouseUp={onMouseUp}
  >
    <style jsx>{`
      div {
        border-color: ${colors.black};
        border-style: solid;
        box-sizing: border-box;
        height: 50%;
        position: relative;
        width: 50%;
      }

      .green {
        background-color: ${colors.green};
        border-top-left-radius: ${border.radius};
        border-width: 0 ${border.width} ${border.width} 0;
      }

      .red {
        background-color: ${colors.red};
        border-top-right-radius: ${border.radius};
        border-width: 0 0 ${border.width} ${border.width};
      }

      .yellow {
        background-color: ${colors.yellow};
        border-bottom-left-radius: ${border.radius};
        border-width: ${border.width} ${border.width} 0 0;
      }

      .blue {
        background-color: ${colors.blue};
        border-bottom-right-radius: ${border.radius};
        border-width: ${border.width} 0 0 ${border.width} ;
      }
    `}</style>
  </div>
);

export default SimonButton;
