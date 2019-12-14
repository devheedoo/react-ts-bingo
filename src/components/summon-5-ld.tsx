/// <reference path='../index.d.ts' />

import React, { useState } from 'react';

import Summon5LdImage from '../images/summon_5_ld.png';

const Summon5LdButton = () => {
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
        marginTop: '50px'
      }}
    >
      <img
        src={Summon5LdImage}
        style={imgStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      />
    </button>
  );
}

export default Summon5LdButton;