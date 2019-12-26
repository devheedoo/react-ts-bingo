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

interface BingoCountNumberProps {
  bingoCount: number;
}

const BingoCountNumber = (props: BingoCountNumberProps) => {
  const {bingoCount} = props;
  if (bingoCount < 10) {
    let bingoCountNumberImage: any;
    switch (bingoCount) {
      case 0:
        bingoCountNumberImage = BingoCount0Image;
        break;
      case 1:
        bingoCountNumberImage = BingoCount1Image;
        break;
      case 2:
        bingoCountNumberImage = BingoCount2Image;
        break;
      case 3:
        bingoCountNumberImage = BingoCount3Image;
        break;
      case 4:
        bingoCountNumberImage = BingoCount4Image;
        break;
      case 5:
        bingoCountNumberImage = BingoCount5Image;
        break;
      case 6:
        bingoCountNumberImage = BingoCount6Image;
        break;
      case 7:
        bingoCountNumberImage = BingoCount7Image;
        break;
      case 8:
        bingoCountNumberImage = BingoCount8Image;
        break;
      case 9:
        bingoCountNumberImage = BingoCount9Image;
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
        src={bingoCountNumberImage}
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

export default BingoCountNumber;