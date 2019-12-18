import React, { useState, useEffect } from 'react';
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

import DarkDragonImage from '../images/dark_dragon.png';
import DarkFairyImage from '../images/dark_fairy.png';
import DarkJackolanternImage from '../images/dark_jackolantern.png';
import FireHargImage from '../images/fire_harg.png';
import LightCoboldbomberImage from '../images/light_coboldbomber.png';
import LightKungfugirlImage from '../images/light_kungfugirl.png';
import LightVampireImage from '../images/light_vampire.png';
import WaterAssassinImage from '../images/water_assassin.png';
import WaterEpikionpriestImage from '../images/water_epikionpriest.png';
import WaterNinjaImage from '../images/water_ninja.png';
import WindBeastmonkImage from '../images/wind_beastmonk.png';
import WindPandawarriorImage from '../images/wind_pandawarrior.png';
import WindUnicornImage from '../images/wind_unicorn.png';

interface PopupSelectMemberProps {
  // playerId: string;
  onClickPlayer: any;
  onClickDimDiv: any;
  show: boolean;
}

const PopupSelectMember = (props: PopupSelectMemberProps) => {
  const {show} = props;
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    setShowPopup(props.show);
    console.log('useEffect!');
  }, [props.show])

  const handleClickPlayer = (event: React.MouseEvent) => {
    console.log('handleClickPlayer()');
    // @ts-ignore
    console.log(event.target.id);
  }

  const handleClickDimDev = () => {
    console.log('CLICK: dim div');
    setShowPopup(false);
    props.onClickDimDiv(false);
  }

  const popupDivStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '1240px',
    height: '700px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    display: show && showPopup ? 'flex' : 'none',
  } as React.CSSProperties;

  return(
    <div
      style={popupDivStyle}
      onClick={handleClickDimDev}
    >
      <div style={{
        width: '700px',
        height: '200px',
        backgroundColor: 'white',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={(event) => { console.log('CLICK: popup div'); event.stopPropagation(); }}
      >
        <PosedButton style={{ width: '80px', height: '80px' }}
          onClick={handleClickPlayer}>
          <img id={'player0'} src={BingoCount0Image} style={{ height: '80px' }} />
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

const posedPopup = posed.div({
  show: {},
  hidden: {},
});

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