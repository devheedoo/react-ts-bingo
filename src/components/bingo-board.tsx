import React from 'react';

import players from './players';
import BingoHighlight from './bingo-highlight';

const COLOR_WATER = 'rgba(0, 0, 255, 0.9)';
const COLOR_FIRE = 'rgba(255, 0, 0, 0.9)';
const COLOR_WIND = 'rgba(255, 200, 0, 0.9)';
const COLOR_LIGHT = 'rgba(255, 255, 255, 0.9)';
const COLOR_DARK = 'rgba(100, 0, 200, 0.9)';

const BingoBoard = (props: BingoBoardProps) => {
  const {bingoData, clickedBingoItemId, completeType, isPopupOpen} = props;
  const incompleteIds = bingoData
    .filter(bingoItem => !bingoItem.isComplete)
    .map(bingoItem => bingoItem.id);

  return (
    <div style={{ 
      width: '510px',
      height: '510px',
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative',
      alignItems: 'flex-start',
      backgroundColor: 'white',
      backgroundImage: 'repeating-linear-gradient(45deg, rgba(201,24,24,0.8), rgba(201,24,24,0.8) 10px, rgba(17,153,24,0.8) 10px, rgba(17,153,24,0.8) 20px)',
    }}>
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        top: 0,
        left: 0,
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {bingoData.map(bingoItem => {
          return (
            <BingoCell
              key={bingoItem.id}
              bingoItem={bingoItem}
              onClick={props.onClickCell}
            />
          );
        })}
      </div>
      <BingoHighlight
        incompleteIds={incompleteIds}
        targetId={clickedBingoItemId}
        completedType={completeType}
        isPopupOpen={isPopupOpen}
      />
    </div>
  );
}

const getProfileImage = (memberId: PlayerId): any => {
  const player = players.filter(player => player.id === memberId);
  let profileImage = null;
  let profileBackgroundColor = 'rgba(255,255,255,0.95)';
  if (player.length > 0) {
    profileImage = player[0].profileImage;
    switch (memberId) {
      case 'Amd':
      case 'Choco':
      case 'Gyul':
        profileBackgroundColor = COLOR_DARK;
        break;
      case 'Giveme':
        profileBackgroundColor = COLOR_FIRE;
        break;
      case 'Hichu':
      case 'Bitter':
      case 'Cube':
        profileBackgroundColor = COLOR_LIGHT;
        break;
      case 'Penguin':
      case 'Wonang':
      case 'Kkasi':
        profileBackgroundColor = COLOR_WATER;
        break;
      case 'Guri':
      case 'Haedal':
      case 'Darkkom':
        profileBackgroundColor = COLOR_WIND;
        break;
      default:
        profileBackgroundColor = COLOR_LIGHT;
        break;
    }
  }
  return {profileImage, profileBackgroundColor};
}

const BingoCell = (props: BingoCellProps) => {
  const {id, memberWhoCompletes} = props.bingoItem;
  
  const handleClick = () => {
    console.log(`handleClick`);
    props.onClick(id);
  }
  
  const {
    profileBackgroundColor: backgroundColor,
    profileImage: backgroundImage
  } = getProfileImage(memberWhoCompletes);
  
  return (
    <div style={{
      width: '100px',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    }}
    onClick={handleClick}>
      <div
        style={{
          position: 'absolute',
          width: '90px',
          height: '90px',
          top: '10px',
          left: '10px',
          backgroundColor: backgroundColor,
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          boxSizing: 'border-box',
          border: '2px solid white',
          transition: 'background-color 1s',
        }}
      />
    </div>
  );
}

export default BingoBoard;