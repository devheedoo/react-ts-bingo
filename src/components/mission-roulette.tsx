import React, { useState, useEffect } from 'react';
import posed from 'react-pose';

import RouletteButtonImage from '../images/roulette_button.png';
import RouletteCoverImage from '../images/roulette_cover.png';
import RouletteFrameImage from '../images/roulette_frame.png';

const LENGTH = 10;

const MissionRoulette = () => {
  const [missionIndex, setMissionIndex] = useState('0');

  const spinRoulette = () => {
    if (missionIndex.includes('d')) {
      setMissionIndex((Math.floor(Math.random() * LENGTH)).toString());
    } else {
      setMissionIndex((Math.floor(Math.random() * LENGTH)).toString() + 'd');
    }
  }

  return (
    <div style={{
      width: '300px',
      height: '200px',
      position: 'relative',
    }}>
      <img src={RouletteFrameImage}
        style={{ width: '300px',
          height: 'auto',
          marginTop: '20px',
          filter: 'drop-shadow(0px 5px 10px #000)',
        }}
      />
      <div
        style={{
          width: '294px',
          height: '73px',
          position: 'absolute',
          top: '77px',
          left: '3px',
          overflow: 'hidden',
        }}
      >
        <MissionList
          pose={'mission' + missionIndex}
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            top: '-8px',
            position: 'absolute',
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            width: '294px',
            lineHeight: '30px',
          }}
          // 15장 연속 노번개
        >
          <li>비스트 라이더 (신규몬스터/속성무관)</li>
          <li>나의 최애 몬스터 (단톡방설문기준)</li>
          <li>15장 연속 노번쩍</li>
          <li>번쩍 연속 2회 (속성무관)</li>
          <li>번쩍 연속 3회 (속성무관)</li>
          <li>흑백 번쩍 (영던/각성포함)</li>
          <li>흑빽 노번쩍</li>
          <li>3속성 번쩍</li>
          <li>바람의 부메랑전사 (12월영던/각성포함)</li>
          <li>잭-오-랜턴 (속성무관/각성포함)</li>

          <li>비스트 라이더 (신규몬스터/속성무관)</li>
          <li>나의 최애 몬스터 (단톡방설문기준)</li>
          <li>15장 연속 노번쩍</li>
          <li>번쩍 연속 2회 (속성무관)</li>
          <li>번쩍 연속 3회 (속성무관)</li>
          <li>흑백 번쩍 (영던/각성포함)</li>
          <li>흑빽 노번쩍</li>
          <li>3속성 번쩍</li>
          <li>바람의 부메랑전사 (12월영던/각성포함)</li>
          <li>잭-오-랜턴 (속성무관/각성포함)</li>

          <li>비스트 라이더 (신규몬스터/속성무관)</li>
          <li>나의 최애 몬스터 (단톡방설문기준)</li>
          <li>15장 연속 노번쩍</li>
          <li>번쩍 연속 2회 (속성무관)</li>
          <li>번쩍 연속 3회 (속성무관)</li>
          <li>흑백 번쩍 (영던/각성포함)</li>
          <li>흑빽 노번쩍</li>
          <li>3속성 번쩍</li>
          <li>바람의 부메랑전사 (12월영던/각성포함)</li>
          <li>잭-오-랜턴 (속성무관/각성포함)</li>

          <li>비스트 라이더 (신규몬스터/속성무관)</li>
          <li>나의 최애 몬스터 (단톡방설문기준)</li>
          <li>15장 연속 노번쩍</li>
          <li>번쩍 연속 2회 (속성무관)</li>
          <li>번쩍 연속 3회 (속성무관)</li>
          <li>흑백 번쩍 (영던/각성포함)</li>
          <li>흑빽 노번쩍</li>
          <li>3속성 번쩍</li>
          <li>바람의 부메랑전사 (12월영던/각성포함)</li>
          <li>잭-오-랜턴 (속성무관/각성포함)</li>

          <li>비스트 라이더 (신규몬스터/속성무관)</li>
          <li>나의 최애 몬스터 (단톡방설문기준)</li>
          <li>15장 연속 노번쩍</li>
          <li>번쩍 연속 2회 (속성무관)</li>
          <li>번쩍 연속 3회 (속성무관)</li>
          <li>흑백 번쩍 (영던/각성포함)</li>
          <li>흑빽 노번쩍</li>
          <li>3속성 번쩍</li>
          <li>바람의 부메랑전사 (12월영던/각성포함)</li>
          <li>잭-오-랜턴 (속성무관/각성포함)</li>

        </MissionList>
      </div>
      <img
        src={RouletteCoverImage}
        style={{
          width: '294px',
          height: '74px',
          position: 'absolute',
          top: '76px',
          left: '3px'
        }} />
      <PosedButton
        style={{
          position: 'absolute',
          width: '300px',
          top: '20px',
          left: 0,
        }}
      >
        <img
          src={RouletteButtonImage}
          style={{ width: '300px' }}
          onClick={spinRoulette}
        />
      </PosedButton>
    </div>
  );
}

const PosedButton = posed.div({
  hoverable: true,
  pressable: true,
  init: { scale: 1, },
  hover: { scale: 1.2, },
  press: { scale: 1.1, },
});

const MissionList = posed.ul({
  mission0: {
    top: (22 - (0 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission1: {
    top: (22 - (1 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission2: {
    top: (22 - (2 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission3: {
    top: (22 - (3 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission4: {
    top: (22 - (4 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission5: {
    top: (22 - (5 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission6: {
    top: (22 - (6 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission7: {
    top: (22 - (7 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission8: {
    top: (22 - (8 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission9: {
    top: (22 - (9 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission0d: {
    top: (22 - ((0 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission1d: {
    top: (22 - ((1 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission2d: {
    top: (22 - ((2 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission3d: {
    top: (22 - ((3 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission4d: {
    top: (22 - ((4 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission5d: {
    top: (22 - ((5 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission6d: {
    top: (22 - ((6 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission7d: {
    top: (22 - ((7 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission8d: {
    top: (22 - ((8 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  mission9d: {
    top: (22 - ((9 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
});

export default MissionRoulette;
