import React from 'react';

import BingoCount0Image from '../images/bingo_count_0.png';
import BingoCount1Image from '../images/bingo_count_1.png';
import BingoCount2Image from '../images/bingo_count_2.png';
import BingoCount3Image from '../images/bingo_count_3.png';
import BingoCount4Image from '../images/bingo_count_4.png';
import BingoCount5Image from '../images/bingo_count_5.png';
import BingoCount6Image from '../images/bingo_count_6.png';
import BingoCount7Image from '../images/bingo_count_7.png';
import BingoCount8Image from '../images/bingo_count_8.png';
import BingoCount9Image from '../images/bingo_count_9.png';
import BingoCountFrameImage from '../images/bingo_count_frame.png';

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
        <BingoCountImage
          bingoCount={bingoCount}
        />
      </div>
    </div>
  );
}

interface BingoCountImageProps {
  bingoCount: number;
}

const BingoCountImage = (props: BingoCountImageProps) => {
  const {bingoCount} = props;
  if (bingoCount < 10) {
    let bingoCountImage: any;
    switch (bingoCount) {
      case 0:
        bingoCountImage = BingoCount0Image;
        break;
      case 1:
        bingoCountImage = BingoCount1Image;
        break;
      case 2:
        bingoCountImage = BingoCount2Image;
        break;
      case 3:
        bingoCountImage = BingoCount3Image;
        break;
      case 4:
        bingoCountImage = BingoCount4Image;
        break;
      case 5:
        bingoCountImage = BingoCount5Image;
        break;
      case 6:
        bingoCountImage = BingoCount6Image;
        break;
      case 7:
        bingoCountImage = BingoCount7Image;
        break;
      case 8:
        bingoCountImage = BingoCount8Image;
        break;
      case 9:
        bingoCountImage = BingoCount9Image;
        break;
      default:
        return (
          <img
            src={BingoCount0Image}
            style={{
          }} />
        );
    }
    return (
      <img
        src={bingoCountImage}
        style={{ height: '60px' }}
      />
    );
  } else {
    let bingoCountTensImage: any;
    let bingoCountUnitsImage: any;
    switch (bingoCount) {
      case 10:
        bingoCountTensImage = BingoCount1Image;
        bingoCountUnitsImage = BingoCount0Image;
        break;
      case 11:
        bingoCountTensImage = BingoCount1Image;
        bingoCountUnitsImage = BingoCount1Image;
        break;
      case 12:
        bingoCountTensImage = BingoCount1Image;
        bingoCountUnitsImage = BingoCount2Image;
        break;
      default:
        return (
          <>
            <img
              src={BingoCount1Image}
              style={{ height: '60px' }}
            />
            <img
              src={BingoCount0Image}
              style={{ height: '60px', marginLeft: '4px' }}
            />
          </>
        );
    }
    return (
      <>
        <img
          src={bingoCountTensImage}
          style={{ height: '60px' }}
        />
        <img
          src={bingoCountUnitsImage}
          style={{ height: '60px', marginLeft: '4px' }}
        />
      </>
    );
  }
}

export default BingoCountBoard;