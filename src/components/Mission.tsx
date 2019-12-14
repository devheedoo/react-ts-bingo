import React, { useState, useEffect } from 'react';
import BingoData from '../BingoData';
import BingoLines from '../BingoLines';
import posed from 'react-pose';
import styled from 'styled-components';

const Mission = () => {
  const [hovering, setHovering] = useState('idle');
  return (
    <div style={{
      width: '500px',
      height: '50px',
      backgroundColor: '#EEEEEE',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <MissionList
        pose={hovering}
        style={{
          position: 'absolute',
          top: 0
        }}
      >
        <ul>
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
        </ul>
      </MissionList>
      <div style={{
        position: 'absolute',
        top: 17,
        width: 1100,
        height: 17,
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}></div>
      <button
        style={{ position: 'absolute', right: 0}}
        onClick={() => setHovering(hovering === 'hovered' ? 'idle' : 'hovered')}
      >
        룰렛 돌리기
      </button>
    </div>
  );
}

const MissionList = posed.div({
  idle: {
    top: 0,
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  hovered: {
    top: -917,
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
});

export default Mission;