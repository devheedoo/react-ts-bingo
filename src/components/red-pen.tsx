import React, { useState, useEffect } from 'react';
import posed from 'react-pose';
import styled from 'styled-components';

const BINGO_LINE_THICKNESS = 20;
const BINGO_LINE_LENGTH = 500;
const BINGO_LINE_LENGTH_DIAGONAL = 1000;

const redLineList: RedLineProps[] = [
  {id: 'ROW_1', top: 0},
  {id: 'ROW_2', top: 100},
  {id: 'ROW_3', top: 200},
  {id: 'ROW_4', top: 300},
  {id: 'ROW_5', top: 400},
  {id: 'COLUMN_1', top: 0, isColumn: true},
  {id: 'COLUMN_2', top: 100, isColumn: true},
  {id: 'COLUMN_3', top: 200, isColumn: true},
  {id: 'COLUMN_4', top: 300, isColumn: true},
  {id: 'COLUMN_5', top: 400, isColumn: true},
  {id: 'DIAGONAL_RIGHT_DOWN', top: 0, isDiagonal: true},
  {id: 'DIAGONAL_RIGHT_UP', top: 0, isColumn: true, isDiagonal: true},
];

const RedPen = (props: RedPenProps) => {
  const {checkedLines} = props;
  console.log(checkedLines);
  return (
    <div
      style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        top: '25px',
        left: '25px',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {redLineList.map(redLine => {
        const show = checkedLines.includes(redLine.id);
        return (
          <StyledRedLinePosed
            pose={show ? 'visible' : 'invisible'}
            id={redLine.id}
            top={redLine.top}
            show={show}
            isColumn={redLine.isColumn}
            isDiagonal={redLine.isDiagonal}
          />
        );
      })}
    </div>
  );
}

const RedLinePosed = posed.div({
  visible: {
    opacity: 1,
    // width: ({ isDiagonal, isColumn }) => (isDiagonal ? BINGO_LINE_LENGTH_DIAGONAL : (!isColumn ? BINGO_LINE_LENGTH : BINGO_LINE_THICKNESS)) + 'px',
    // height: ({ isDiagonal, isColumn }) => (isColumn && !isDiagonal ? BINGO_LINE_LENGTH : BINGO_LINE_THICKNESS) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 300 }
    }
  },
  invisible: {
    opacity: 0,
    // width: 0,
    // height: 0,
    transition: {
      default: { ease: 'easeInOut', duration: 300 }
    }
  }
});

const StyledRedLinePosed = styled(RedLinePosed)<RedLineProps>`
  position: absolute;
  width: ${props => props.isDiagonal ? BINGO_LINE_LENGTH_DIAGONAL : (!props.isColumn ? BINGO_LINE_LENGTH : BINGO_LINE_THICKNESS)}px;
  height: ${props => props.isColumn && !props.isDiagonal ? BINGO_LINE_LENGTH : BINGO_LINE_THICKNESS}px;
  top: ${props => props.isDiagonal ? 240 : (!props.isColumn ? props.top + 40 : 0)}px;
  left: ${props => props.isDiagonal ? -250 : (props.isColumn ? props.top + 40 : 0)}px;
  transform: ${props => props.isDiagonal ? (props.isColumn ? 'rotate(-45deg)' : 'rotate(45deg)') : ''};
  background-color: rgba(255,0,0,0.3);
`;

export default RedPen;