import React, { useState, useEffect } from 'react';
import posed from 'react-pose';

import players from './Players';

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
    console.log(event.target);
    const $target = event.target as HTMLDivElement;
    if ($target.localName === 'div') {
      // @ts-ignore
      console.log($target.firstChild.id);
    } else if ($target.localName === 'img') {
      // @ts-ignore
      console.log(event.target.id);
    }
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
        width: '1100px',
        height: '350px',
        backgroundColor: 'white',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      onClick={(event) => { console.log('CLICK: popup div'); event.stopPropagation(); }}
      >
        {players.map((player: Player, index: number) => {
          return (
            <PosedButton style={{ width: '150px', height: '150px' }}
              onClick={handleClickPlayer}>
              <img id={player.id} src={player.fullImage} style={{ height: '150px' }} />
            </PosedButton>
          );
        })}
        {/* <PosedButton style={{ width: '80px', height: '80px' }}
          onClick={handleClickPlayer}>
          <img id={'player0'} src={DarkDragonImage} style={{ height: '80px' }} />
        </PosedButton>
        <PosedButton style={{ width: '80px', height: '80px' }}>
        <img src={DarkFairyImage} style={{ height: '80px' }} />
        </PosedButton>
        <PosedButton style={{ width: '80px', height: '80px' }}>
        <img src={BingoCount2Image} style={{ height: '80px' }} />
        </PosedButton>
        <PosedButton style={{ width: '80px', height: '80px' }}>
        <img src={BingoCount3Image} style={{ height: '80px' }} />
        </PosedButton> */}
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
    scale: 1.4,
  },
  press: {
    scale: 1.1,
  }
});

export default PopupSelectMember;