import React, { useState } from 'react';

const App = () => {
  return (
    <div>
      <h1>MEMORY</h1>
      <div style={{ display: 'flex' }}>
        <Bingo />
        <div style={{ width: '300px', height: '550px', backgroundColor: 'lightgray' }}>
          <BingoStatus />
          <RouletteButton />
        </div>
      </div>
    </div>
  );
};

const Bingo = () => {
  return (
    <div style={{ 
      width: '800px',
      height: '550px',
      backgroundColor: 'gray',
      boxSizing: 'border-box',
      padding: '25px',
    }}>
      <div style={{ 
        width: '600px',
        height: '500px',
        backgroundColor: 'lightgray',
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {Array(30).fill(null).map(elem => <BingoCell isComplete={false} />)}
      </div>
    </div>
  );
}

interface BingoCellProps {
  isComplete: boolean;
}
const BingoCell = (props: BingoCellProps) => {
  const {isComplete} = props;
  return (
    <div style={{
      width: '100px',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
        <p>FRONT: </p>
        {isComplete ? (
          <p>O</p>
        ) : (
          <p>X</p>
        )}
      </div>
    </div>
  );
}

const BingoStatus = () => {
  return (
    <div>
      STATUS
    </div>
  );
}

const RouletteButton = () => {
  return (
    <div>
      <button>RANDOM</button>
    </div>
  );
}

interface BingoItem {
  id: number;
  icon: string;
  description: string;
  isComplete: boolean;
}

const bingoList: BingoItem[] = [
  {
    id: 1,
    icon: 'icon',
    description: 'description1',
    isComplete: false,
  },
  {
    id: 2,
    icon: 'icon',
    description: 'description2',
    isComplete: false,
  },
  {
    id: 3,
    icon: 'icon',
    description: 'description3',
    isComplete: false,
  },
  {
    id: 4,
    icon: 'icon',
    description: 'description4',
    isComplete: false,
  },
  {
    id: 5,
    icon: 'icon',
    description: 'description5',
    isComplete: false,
  },
  {
    id: 6,
    icon: 'icon',
    description: 'description6',
    isComplete: false,
  },
  {
    id: 7,
    icon: 'icon',
    description: 'description7',
    isComplete: false,
  },
  {
    id: 8,
    icon: 'icon',
    description: 'description8',
    isComplete: false,
  },
  {
    id: 9,
    icon: 'icon',
    description: 'description9',
    isComplete: false,
  },
  {
    id: 10,
    icon: 'icon',
    description: 'description10',
    isComplete: false,
  },
  {
    id: 11,
    icon: 'icon',
    description: 'description11',
    isComplete: false,
  },
  {
    id: 12,
    icon: 'icon',
    description: 'description12',
    isComplete: false,
  },
  {
    id: 13,
    icon: 'icon',
    description: 'description13',
    isComplete: false,
  },
  {
    id: 14,
    icon: 'icon',
    description: 'description14',
    isComplete: false,
  },
  {
    id: 15,
    icon: 'icon',
    description: 'description15',
    isComplete: false,
  },
  {
    id: 16,
    icon: 'icon',
    description: 'description16',
    isComplete: false,
  },
  {
    id: 17,
    icon: 'icon',
    description: 'description17',
    isComplete: false,
  },
  {
    id: 18,
    icon: 'icon',
    description: 'description18',
    isComplete: false,
  },
  {
    id: 19,
    icon: 'icon',
    description: 'description19',
    isComplete: false,
  },
  {
    id: 20,
    icon: 'icon',
    description: 'description20',
    isComplete: false,
  },
  {
    id: 21,
    icon: 'icon',
    description: 'description21',
    isComplete: false,
  },
  {
    id: 22,
    icon: 'icon',
    description: 'description22',
    isComplete: false,
  },
  {
    id: 23,
    icon: 'icon',
    description: 'description23',
    isComplete: false,
  },
  {
    id: 24,
    icon: 'icon',
    description: 'description24',
    isComplete: false,
  },
  {
    id: 25,
    icon: 'icon',
    description: 'description25',
    isComplete: false,
  },
]

const rotateBingo = (bingoList: BingoItem[]): BingoItem => {
  const incompleteBingoList = bingoList.filter(bingo => !bingo.isComplete);
  const nextIndex = Math.floor(Math.random() * (incompleteBingoList.length));
  // 20, 0.1
  // 10, 0.2
  // 3, 0.5
  // 1, 멈춰
  return incompleteBingoList[nextIndex];
}

// 현재 칸 기준 빙고 완성 여부
const checkNewBingo = (bingoList: BingoItem[]): boolean => {
  return false;
}

// setComplete complete
//   complete: gray mode, 도장 이미지 꽝
//     bingo: 줄 슥 그어지게
//   close window

// updateBingoCount
//   bingoList complete
//   updateView


export default App;
