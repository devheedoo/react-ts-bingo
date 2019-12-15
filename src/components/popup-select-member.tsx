import React from 'react';
import posed from 'react-pose';

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

const PopupSelectMember = () => {
  return(
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '1240px',
      height: '700px',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        width: '700px',
        height: '200px',
        backgroundColor: 'white',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <PosedButton style={{ width: '80px', height: '80px' }}>
          <img src={BingoCount0Image} style={{ height: '80px' }} />
        </PosedButton>
        <PosedButton style={{ width: '80px', height: '80px' }}>
        <img src={BingoCount1Image} style={{ height: '80px' }} />
        </PosedButton>
        <PosedButton style={{ width: '80px', height: '80px' }}>
        <img src={BingoCount2Image} style={{ height: '80px' }} />
        </PosedButton>
        <PosedButton style={{ width: '80px', height: '80px' }}>
        <img src={BingoCount3Image} style={{ height: '80px' }} />
        </PosedButton>
      </div>
    </div>
  );
}

const PosedButton = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
  },
  press: {
    scale: 1,
  }
});

export default PopupSelectMember;