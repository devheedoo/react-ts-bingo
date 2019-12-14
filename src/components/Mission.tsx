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
          <li>암속성 아누비스 (서머너즈워 유일 광역 낙인 스킬 보유 몬스터)</li>
          <li>비스트 라이더 (2019년 12월 신규 몬스터, 속성 무관)</li>
          <li>나의 최애 몬스터 소환하기 (2019년 12월 14일 카카오톡 기준)</li>
          <li>번개 연속 3회 (속성 무관)</li>
          <li>풍속성 부메랑 전사 (2019년 12월 영웅 던전, 각성 포함)</li>
          <li>빛/암 번개 (영웅 던전, 각성 포함)</li>
          <li>빛/암 노번개</li>
          <li>잭-오-랜턴 (속성 무관, 각성 포함)</li>
          <li>A, B, C (3성 실시간 아레나 MVP 몬스터)</li>
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