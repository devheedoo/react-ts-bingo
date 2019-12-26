import React, { useState, useEffect } from 'react';
import posed from 'react-pose';

import players from './players';

interface PopupSelectMemberProps {
  onClickPlayer: (memberId: PlayerId) => void;
  onClickDimDiv: () => void;
  isPopupOpen: boolean;
}

const PopupSelectMember = (props: PopupSelectMemberProps) => {
  const {isPopupOpen} = props;
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    setShowPopup(isPopupOpen);
  }, [isPopupOpen])

  const handleClickPlayer = (event: React.MouseEvent) => {
    const $target = event.target as HTMLDivElement;
    if ($target.localName === 'div') {
      // @ts-ignore
      props.onClickPlayer($target.firstChild.id);
    } else if ($target.localName === 'img') {
      // @ts-ignore
      props.onClickPlayer($target.id);
    }
  }

  const handleClickDimDev = () => {
    setShowPopup(false);
    props.onClickDimDiv();
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
    display: isPopupOpen && showPopup ? 'flex' : 'none',
  } as React.CSSProperties;

  return(
    <div
      style={popupDivStyle}
      onClick={handleClickDimDev}
    >
      <div
        style={{
          width: '1100px',
          height: '350px',
          backgroundColor: 'white',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
        onClick={(event) => { event.stopPropagation(); }}
      >
        {players.map((player: Player) => {
          return (
            <PosedButton style={{ width: '150px', height: '150px' }}
              onClick={handleClickPlayer}>
              <img id={player.id} src={player.fullImage} style={{ height: '150px' }} />
            </PosedButton>
          );
        })}
        <PosedButton style={{ width: '150px', height: '150px' }}
          onClick={handleClickDimDev}>
          <div style={{
            height: '150px',
            width: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            fontSize: '30px',
          }}>
            취 소
          </div>
        </PosedButton>
      </div>
    </div>
  );
}

const PosedButton = posed.div({
  hoverable: true,
  pressable: true,
  init: { scale: 1, },
  hover: { scale: 1.4, },
  press: { scale: 1.1, },
});

export default PopupSelectMember;