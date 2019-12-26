import React from 'react';

import BingoCountFrameImage from '../images/bingo_count_frame.png';

import BingoCountNumber from './bingo-count-number';

interface BingoCountBoardProps {
  bingoCount: number;
}

const BingoCountBoard = (props: BingoCountBoardProps) => {
  const {bingoCount} = props;
  return (
    <div style={{
      width: '200px',
      height: '135px',
      position: 'relative',
    }}>
      <img
        src={BingoCountFrameImage}
        style={{
          width: '145px',
          height: 'auto',
          marginTop: '20px',
          filter: 'drop-shadow(0px 5px 10px #000)',
          // boxShadow: '0px 5px 10px rgba(0,0,0,0.8)'
        }}
      />
      <div style={{
        width: '139px',
        height: '76px',
        position: 'absolute',
        top: '76px',
        left: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <BingoCountNumber
          bingoCount={bingoCount}
        />
      </div>
    </div>
  );
}

export default BingoCountBoard;