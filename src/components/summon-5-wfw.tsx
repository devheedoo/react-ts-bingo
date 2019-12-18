/// <reference path='../index.d.ts' />

import React from 'react';
import posed from 'react-pose';

import Summon5WfwImage from '../images/summon_5_wfw.png';

const Summon5WfwButton = () => {
  const imgStyle = {
    width: '200px',
    height: 'auto',
    filter: 'drop-shadow(0px 5px 10px #eee)',
  } as React.CSSProperties;
  return (
    <PosedSummonButton
      style={{
        padding: 0,
        background: 'none',
        border: 'none',
      }}
    >
      <img
        src={Summon5WfwImage}
        style={imgStyle}
      />
    </PosedSummonButton>
  );
}

const PosedSummonButton = posed.div({
  hoverable: true,
  pressable: true,
  init: { scale: 1, },
  hover: { scale: 1.2, },
  press: { scale: 1.1, },
});

export default Summon5WfwButton;