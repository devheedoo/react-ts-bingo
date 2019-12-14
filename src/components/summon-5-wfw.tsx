/// <reference path='../index.d.ts' />

import React, { useState } from 'react';

import Summon5WfwImage from '../images/summon_5_wfw.png';

const Summon5WfwButton = () => {
  const [isHovered, setHovered] = useState(false);
  const [isPressed, setPressed] = useState(false);
  const imgStyle = {
    width: '200px',
    height: 'auto',
    backgroundColor: isHovered ? 'rgba(0,0,0,0.3)' : '',
    marginTop: isPressed ? '3px' : 0,
  };
  return (
    <button
      style={{
        padding: 0,
        background: 'none',
        border: 'none',
      }}
    >
      <img
        src={Summon5WfwImage}
        style={imgStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      />
    </button>
  );
}

export default Summon5WfwButton;