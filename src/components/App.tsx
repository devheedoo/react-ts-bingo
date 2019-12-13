/// <reference path='../index.d.ts' />

import React, { useState, useEffect } from 'react';
import BingoData from '../BingoData';
import BingoLines from '../BingoLines';

const App = () => {
  const [bingo, setBingo] = useState({
    bingoData: BingoData,
    bingoLines: BingoLines,
    bingoCount: 0,
  });

  const handleClickRouletteButton = () => {
    const randomBingoItemId: number = getRandomIncompleteBingoItemId(bingo.bingoData);
    if (randomBingoItemId === -1) {
      console.log(`No incomplete item remains`);
      return;
    }
    const newBingoData: BingoItem[] = bingo.bingoData.map(bingoItem => {
      return bingoItem.id === randomBingoItemId ? { ...bingoItem, isComplete: true } : bingoItem;
    })
    const newBingoLines = checkBingoLines(newBingoData, bingo.bingoLines);
    const newBingoCount = newBingoLines.filter(bingoLine => bingoLine.isBingo).length;

    setBingo({
      bingoData: newBingoData,
      bingoLines: newBingoLines,
      bingoCount: newBingoCount,
    });
  }

  useEffect(() => {
    console.log('RENDER!');
  });

  return (
    <div>
      <h1>MEMORY</h1>
      <div style={{ display: 'flex' }}>
        <Bingo
          bingoData={bingo.bingoData}
        />
        <div style={{ width: '300px', height: '550px', backgroundColor: 'lightgray' }}>
          <BingoStatus
            bingoCount={bingo.bingoCount}
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
              bingoItem={bingoItem}
            />
          );
        })}
      </div>
    </div>
  );
}

const BingoCell = (props: BingoCellProps) => {
  const {id, icon, description, isComplete, isBingo} = props.bingoItem;
  const backgroundColor = isBingo ? 'red' : isComplete ? 'yellow' : 'white';
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
        <p style={{ margin: 0 }}>{id}</p>
        <p style={{ margin: 0 }}>{icon}</p>
        <p style={{ margin: 0 }}>{description}</p>
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
const checkBingoLines = (bingoList: BingoItem[], bingoLines: BingoLine[]): BingoLine[] => {
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
