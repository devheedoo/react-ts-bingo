import React, { useState } from 'react';

import RouletteButtonImage from '../images/roulette_button.png';
import RouletteCoverImage from '../images/roulette_cover.png';
import RouletteFrameImage from '../images/roulette_frame.png';

const MissionRoulette = () => {
  const [hovering, setHovering] = useState('idle');
  return (
    <>
      <img src={RouletteFrameImage} style={{ width: '300px', height: 'auto', marginTop: '20px', }} />
      <div style={{
        width: '294px',
        height: '74px',
        position: 'absolute',
        top: '75px',
        left: '3px',
        overflow: 'hidden',
      }}>
        <ul>
          <li>암속성 아누비스 (서머유일광역낙인러)</li>
          <li>비스트 라이더 (신규몬스터/속성무관)</li>
          <li>나의 최애 몬스터 (단톡방설문기준)</li>
          <li>번개 연속 3회 (속성무관)</li>
          <li>풍속성 부메랑전사 (지금영던/각성포함)</li>
          <li>빛/암 번개 (영던/각성포함)</li>
          <li>빛/암 노번개</li>
          <li>잭-오-랜턴 (속성무관/각성포함)</li>
          <li>A, B, C (3성 실시간 아레나 MVP 몬스터)</li>
        </ul>
      </div>
      <img src={RouletteCoverImage} style={{ width: '294px', height: '74px', position: 'absolute', top: '75px', left: '3px'}} />
    </>
  );
}

export default MissionRoulette;