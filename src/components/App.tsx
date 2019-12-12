/// <reference path='../index.d.ts' />

import React, { useState, useEffect } from 'react';
import BingoData from '../BingoData';
import BingoLines from '../BingoLines';

const App = () => {
  const [bingoData, setBingoData] = useState(BingoData);
  const [bingoLines, setBingoLines] = useState(BingoLines);
  const [bingoCount, setBingoCount] = useState(0);

  const handleClickRouletteButton = () => {
    const randomBingoItemId: number = getRandomIncompleteBingoItemId(bingoData);
    if (randomBingoItemId === -1) {
      console.log(`No incomplete item remains`);
      return;
    }
    const newBingoData: BingoItem[] = bingoData.map(bingoItem => {
      if (bingoItem.id === randomBingoItemId) bingoItem.isComplete = true;
      return bingoItem;
    })
    const checkedBingoLines = checkBingo(bingoData, bingoLines);
    const newBingoCount = checkedBingoLines.filter(bingoLine => bingoLine.isBingo).length;
    
    setBingoData(newBingoData);
    setBingoLines(checkedBingoLines);
    setBingoCount(newBingoCount);
  }
  // drawBingo

  return (
    <div>
      <h1>MEMORY</h1>
      <div style={{ display: 'flex' }}>
        <Bingo
          bingoData={bingoData}
        />
        <div style={{ width: '300px', height: '550px', backgroundColor: 'lightgray' }}>
          <BingoStatus
            bingoCount={bingoCount}
          />
          <RouletteButton
            onClick={handleClickRouletteButton}
          />
        </div>
      </div>
    </div>
  );
};

const Bingo = (props: BingoProps) => {
  const {bingoData} = props;
  return (
    <div style={{ 
      width: '800px',
      height: '550px',
      backgroundColor: 'gray',
      boxSizing: 'border-box',
      padding: '25px',
    }}>
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
              id={bingoItem.id}
              icon={bingoItem.icon}
              description={bingoItem.description}
              isComplete={bingoItem.isComplete}
            />
          );
        })}
      </div>
    </div>
  );
}

const BingoCell = (props: BingoItem) => {
  const {isComplete} = props;
  const backgroundColor = isComplete ? 'yellow' : 'white';
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
        backgroundColor: backgroundColor,
        flexDirection: 'column',
      }}>
        <p style={{ margin: 0 }}>{props.id}</p>
        <p style={{ margin: 0 }}>{props.icon}</p>
        <p style={{ margin: 0 }}>{props.description}</p>
      </div>
    </div>
  );
}

const BingoStatus = (props: BingoStatusProps) => {
  const {bingoCount} = props;
  return (
    <div>
      BINGO LINE: {bingoCount}
    </div>
  );
}

const RouletteButton = (props:RouletteButtonProps) => {
  return (
    <div>
      <button onClick={props.onClick}>RANDOM</button>
    </div>
  );
}

const getRandomIncompleteBingoItemId = (bingoList: BingoItem[]): number => {
  const incompleteBingoList = bingoList.filter(bingo => !bingo.isComplete);
  const nextIndex = Math.floor(Math.random() * (incompleteBingoList.length));
  // 20, 0.1
  // 10, 0.2
  // 3, 0.5
  // 1, 멈춰
  const incompleteBingoItem = incompleteBingoList[nextIndex];
  return incompleteBingoItem ? incompleteBingoItem.id : -1;
}

// 현재 칸 기준 빙고 완성 여부
const checkBingo = (bingoList: BingoItem[], bingoLines: BingoLine[]): BingoLine[] => {
  const completeBingoList: BingoItem[] = bingoList.filter(bingo => bingo.isComplete);
  const completeBingoIds: number[] = completeBingoList.map(bingo => bingo.id);
  const newBingoLines = bingoLines.map((bingoLine) => {
    let canDrawLine = true;
    bingoLine.indexes.map(indexId => {
      if (!completeBingoIds.includes(indexId)) {
        canDrawLine = false;
      }
    });
    return canDrawLine ? { ...bingoLine, isBingo: true } : bingoLine;
  })
  return newBingoLines;
}

// setComplete complete
//   complete: gray mode, 도장 이미지 꽝
//     bingo: 줄 슥 그어지게
//   close window

// updateBingoCount
//   bingoList complete
//   updateView


export default App;
