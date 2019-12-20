import React from 'react';

import players from './Players';
import BingoHighlight from './bingo-highlight';

const COLOR_WATER = 'rgba(0, 0, 255, 0.7)';
const COLOR_FIRE = 'rgba(255, 0, 0, 0.7)';
const COLOR_WIND = 'rgba(255, 200, 0, 0.7)';
const COLOR_LIGHT = 'rgba(255, 255, 255, 0.7)';
const COLOR_DARK = 'rgba(100, 0, 200, 0.7)';

const BingoBoard = (props: BingoProps) => {
  const {bingoData} = props;
  return (
    <div style={{ 
      width: '500px',
      height: '500px',
      backgroundColor: 'lightgray',
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative',
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
      <BingoHighlight />
    </div>
  );
}

const getProfileImage = (memberId: PlayerId): any => {
  const player = players.filter(player => player.id === memberId);
  let profileImage = null;
  let profileBackgroundColor = 'white';
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
    }}
    onClick={handleClick}>
      <div
        style={{
          width: '80px',
          height: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          flexDirection: 'column',

          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </div>
  );
}

export default BingoBoard;