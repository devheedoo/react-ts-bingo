import React, { useState, useEffect } from 'react';

import DarkDragonImage from '../images/players/dark_dragon.png';
import DarkFairyImage from '../images/players/dark_fairy.png';
import DarkJackolanternImage from '../images/players/dark_jackolantern.png';
import FireHargImage from '../images/players/fire_harg.png';
import LightCoboldbomberImage from '../images/players/light_coboldbomber.png';
import LightKungfugirlImage from '../images/players/light_kungfugirl.png';
import LightVampireImage from '../images/players/light_vampire.png';
import WaterAssassinImage from '../images/players/water_assassin.png';
import WaterEpikionpriestImage from '../images/players/water_epikionpriest.png';
import WaterNinjaImage from '../images/players/water_ninja.png';
import WindBeastmonkImage from '../images/players/wind_beastmonk.png';
import WindPandawarriorImage from '../images/players/wind_pandawarrior.png';
import WindUnicornImage from '../images/players/wind_unicorn.png';

const COLOR_BRIGHT_YELLOW = 'rgba(254, 255, 191, 0.7)';

const BingoBoard = (props: BingoProps) => {
  const {bingoData} = props;
  return (
    <div style={{ 
      width: '500px',
      height: '500px',
      backgroundColor: 'lightgray',
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
  );
}

const BingoCell = (props: BingoCellProps) => {
  const {id, icon, description, isComplete, isBingo} = props.bingoItem;
  const backgroundColor = isBingo ? 'red' : isComplete ? COLOR_BRIGHT_YELLOW : 'white';

  const handleClick = () => {
    console.log(`handleClick`);
    props.onClick(id);
  }

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

          // backgroundImage: `url(${DarkDragonImage})`,
          // backgroundPosition: 'center',
          // backgroundSize: 'cover',
          // backgroundRepeat: 'no-repeat',
        }}
      >
        {/* <p style={{ margin: 0 }}>{id}</p>
        <p style={{ margin: 0 }}>{icon}</p>
        <p style={{ margin: 0 }}>{description}</p> */}
      </div>
    </div>
  );
}

export default BingoBoard;