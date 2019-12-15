import React, { useState, useEffect } from 'react';
import posed from 'react-pose';

import RouletteButtonImage from '../images/roulette_button.png';
import RouletteCoverImage from '../images/roulette_cover.png';
import RouletteFrameImage from '../images/roulette_frame.png';

const LENGTH = 9;

const MissionRoulette = () => {
  const [hovering, setHovering] = useState('idle');
  const [isHovered, setHovered] = useState(false);
  const [isPressed, setPressed] = useState(false);
  const [missionIndex, setMissionIndex] = useState('0');

  let poseState = 'missionA';
  const spinRoulette = () => {
    if (missionIndex.includes('d')) {
      setMissionIndex((Math.floor(Math.random() * LENGTH)).toString());
    } else {
      setMissionIndex((Math.floor(Math.random() * LENGTH)).toString() + 'd');
    }
    console.log(missionIndex);
  }

  const buttonStyle = {
    position: 'absolute',
    width: '300px',
    top: isPressed ? '22px' : '20px',
    left: 0,
    backgroundColor: isHovered ? 'rgba(0,0,0,0.3)' : '',
  } as React.CSSProperties;
// 22 -8 -38 

  useEffect(() => console.log(`Render MissionRoulette`));

  return (
    <div style={{
      width: '300px',
      height: '200px',
      position: 'relative',
    }}>
      <img src={RouletteFrameImage} style={{ width: '300px', height: 'auto', marginTop: '20px', }} />
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
          // missionIndex={missionIndex}
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            top: '-8px',
            position: 'absolute',
            fontFamily: 'sans-serif',
            width: '294px',
            lineHeight: '30px',
          }}
        >
          <li>암속성 아누비스 (서머유일광역낙인러)</li>
          <li>비스트 라이더 (신규몬스터/속성무관)</li>
          <li>나의 최애 몬스터 (단톡방설문기준)</li>
          <li>번개 연속 3회 (속성무관)</li>
          <li>풍속성 부메랑전사 (지금영던/각성포함)</li>
          <li>빛/암 번개 (영던/각성포함)</li>
          <li>빛/암 노번개</li>
          <li>잭-오-랜턴 (속성무관/각성포함)</li>
          <li>A, B, C (3성 실시간 아레나 MVP 몬스터)</li>

          <li>암속성 아누비스 (서머유일광역낙인러)</li>
          <li>비스트 라이더 (신규몬스터/속성무관)</li>
          <li>나의 최애 몬스터 (단톡방설문기준)</li>
          <li>번개 연속 3회 (속성무관)</li>
          <li>풍속성 부메랑전사 (지금영던/각성포함)</li>
          <li>빛/암 번개 (영던/각성포함)</li>
          <li>빛/암 노번개</li>
          <li>잭-오-랜턴 (속성무관/각성포함)</li>
          <li>A, B, C (3성 실시간 아레나 MVP 몬스터)</li>
          
          <li>암속성 아누비스 (서머유일광역낙인러)</li>
          <li>비스트 라이더 (신규몬스터/속성무관)</li>
          <li>나의 최애 몬스터 (단톡방설문기준)</li>
          <li>번개 연속 3회 (속성무관)</li>
          <li>풍속성 부메랑전사 (지금영던/각성포함)</li>
          <li>빛/암 번개 (영던/각성포함)</li>
          <li>빛/암 노번개</li>
          <li>잭-오-랜턴 (속성무관/각성포함)</li>
          <li>A, B, C (3성 실시간 아레나 MVP 몬스터)</li>

          <li>암속성 아누비스 (서머유일광역낙인러)</li>
          <li>비스트 라이더 (신규몬스터/속성무관)</li>
          <li>나의 최애 몬스터 (단톡방설문기준)</li>
          <li>번개 연속 3회 (속성무관)</li>
          <li>풍속성 부메랑전사 (지금영던/각성포함)</li>
          <li>빛/암 번개 (영던/각성포함)</li>
          <li>빛/암 노번개</li>
          <li>잭-오-랜턴 (속성무관/각성포함)</li>
          <li>A, B, C (3성 실시간 아레나 MVP 몬스터)</li>

          <li>암속성 아누비스 (서머유일광역낙인러)</li>
          <li>비스트 라이더 (신규몬스터/속성무관)</li>
          <li>나의 최애 몬스터 (단톡방설문기준)</li>
          <li>번개 연속 3회 (속성무관)</li>
          <li>풍속성 부메랑전사 (지금영던/각성포함)</li>
          <li>빛/암 번개 (영던/각성포함)</li>
          <li>빛/암 노번개</li>
          <li>잭-오-랜턴 (속성무관/각성포함)</li>
          <li>A, B, C (3성 실시간 아레나 MVP 몬스터)</li>
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
      <img
        src={RouletteButtonImage}
        style={buttonStyle}
        // onMouseEnter={() => setHovered(true)}
        // onMouseLeave={() => setHovered(false)}
        // onMouseDown={() => setPressed(true)}
        // onMouseUp={() => setPressed(false)}
        onClick={spinRoulette}
      />
    </div>
  );
}

const MissionList = posed.ul({
  mission0: {
    top: (22 - (0 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission1: {
    top: (22 - (1 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission2: {
    top: (22 - (2 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission3: {
    top: (22 - (3 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission4: {
    top: (22 - (4 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission5: {
    top: (22 - (5 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission6: {
    top: (22 - (6 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission7: {
    top: (22 - (7 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission8: {
    top: (22 - (8 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission9: {
    top: (22 - (9 * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission0d: {
    top: (22 - ((0 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission1d: {
    top: (22 - ((1 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission2d: {
    top: (22 - ((2 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission3d: {
    top: (22 - ((3 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission4d: {
    top: (22 - ((4 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission5d: {
    top: (22 - ((5 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission6d: {
    top: (22 - ((6 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission7d: {
    top: (22 - ((7 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission8d: {
    top: (22 - ((8 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
  mission9d: {
    top: (22 - ((9 + (LENGTH * 4)) * 30)) + 'px',
    transition: {
      default: { ease: 'easeInOut', duration: 3000 }
    }
  },
});

export default MissionRoulette;