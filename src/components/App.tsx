/// <reference path='../index.d.ts' />

import React, { useState, useEffect } from 'react';
import BingoData from '../bingo-data';
import BingoLines from '../bingo-lines';

import BackgroundImage from '../images/background.png';
import TitleImage from '../images/title.png';
import LogoBubbleImage from '../images/logo_bubble.png';

import BingoBoard from './bingo-board';
import Mission from './mission';
import RedPen from './red-pen';
import BingoCountBoard from './bingo-count-board';
import Summon5LdButton from './summon-5-ld';
import Summon5WfwButton from './summon-5-wfw';
import MissionRoulette from './mission-roulette';
import PopupSelectMember from './popup-select-member';

const turnOffTargetOnNext = (
  turnOffFunc: any,
  turnOnFunc: any,
  currentIndex: number,
  nextIndex: number,
  seconds: number,
) => {
  setTimeout(() => {
    console.log(`turnOn ${nextIndex} at ${seconds}`);
    turnOffFunc(currentIndex);
    turnOnFunc(nextIndex);
  }, seconds * 1000);
}

const turnOn = (index: number) => {
  console.log(`turnOn:${index}`);
}

const turnOff = (index: number) => {
  console.log(`turnOff:${index}`);
}

const getNextIndex = (
  list: any[],
  currentIndex: number,
): number => {
  if (list.length === currentIndex + 1) {
    return 0;
  } else {
    return currentIndex + 1;
  }
}

const callSequentially = (
  turnOnFunc: any,
  turnOffFunc: any,
  iteratingSequence: any[],
  targetIndex: number,
) => {
  let accumulatorInSecond: number = 0;
  let currentIndex: number = 0;
  let nextIndex: number = 0;

  // 0-2초: 0.1초씩 돌아가고
  turnOnFunc(iteratingSequence[currentIndex]);
  while(accumulatorInSecond < 2) {
    nextIndex = getNextIndex(iteratingSequence, currentIndex);
    accumulatorInSecond = accumulatorInSecond + 0.1;
    turnOffTargetOnNext(turnOffFunc, turnOnFunc, currentIndex, nextIndex, accumulatorInSecond);
    currentIndex = nextIndex;
  }
  // 2-4초: 0.2초씩 돌아가고
  while(accumulatorInSecond < 4) {
    nextIndex = getNextIndex(iteratingSequence, currentIndex);
    accumulatorInSecond = accumulatorInSecond + 0.2;
    turnOffTargetOnNext(turnOffFunc, turnOnFunc, currentIndex, nextIndex, accumulatorInSecond);
    currentIndex = nextIndex;
  }
  // 4초~: 타겟 도달할 때까지 0.5초씩 돌아가고
  while(currentIndex !== targetIndex) {
    nextIndex = getNextIndex(iteratingSequence, currentIndex);
    accumulatorInSecond = accumulatorInSecond + 0.5;
    turnOffTargetOnNext(turnOffFunc, turnOnFunc, currentIndex, nextIndex, accumulatorInSecond);
    currentIndex = nextIndex;
  }
}

const App = () => {
  const [bingo, setBingo] = useState<AppState>({
    bingoData: BingoData,
    bingoLines: BingoLines,
    bingoCount: 0,
    clickedBingoItemId: 0,
    completeType: undefined,
  });
  const [history, setHistory] = useState([]);

  const handleClickSummon5WfwButton = () => {
    const randomBingoItemId: number = getRandomIncompleteBingoItemId(bingo.bingoData);
    if (randomBingoItemId === -1) {
      console.log(`No incomplete item remains`);
      return;
    }
    setBingo({
      ...bingo,
      clickedBingoItemId: randomBingoItemId,
      completeType: 'SUMMON_5_WFW',
    });
  }

  const handleClickSummon5LdButton = () => {
    const randomBingoItemId: number = getRandomIncompleteBingoItemId(bingo.bingoData);
    if (randomBingoItemId === -1) {
      console.log(`No incomplete item remains`);
      return;
    }
    setBingo({
      ...bingo,
      clickedBingoItemId: randomBingoItemId,
      completeType: 'SUMMON_5_LD',
    });
  }

  const handleClickBingoCell = (id: number) => {
    setBingo({
      ...bingo,
      clickedBingoItemId: id,
      completeType: 'MISSION_CLEAR',
    });
  }

  const handleClickPopupSelectMember = (memberId: PlayerId) => {
    const {completeType} = bingo;
    if (completeType && completeType === 'SUMMON_5_WFW') {
      // Random Cell Animation
      // input: seconds list, rotating bingo cell list, target bingo cell id

    }

    let newBingoData: BingoItem[] = bingo.bingoData;
    if (completeType && completeType === 'SUMMON_5_LD') {
      // Random Line Animation
      const cellId = bingo.clickedBingoItemId;
      const randomBingoLines = BingoLines.filter(bingoLine => bingoLine.indexes.includes(cellId));
      const randomIndex = Math.floor(Math.random() * randomBingoLines.length);
      const randomBingoLineCellIds = randomBingoLines[randomIndex].indexes;
      newBingoData = bingo.bingoData.map(bingoItem => {
        if (
          randomBingoLineCellIds.includes(bingoItem.id) &&
          !bingoItem.isComplete
        ) {
          return { ...bingoItem, isComplete: true, memberWhoCompletes: memberId };
        } else {
          return bingoItem;
        }
      })
    } else {
      newBingoData = bingo.bingoData.map(bingoItem => {
        return bingoItem.id === bingo.clickedBingoItemId
          ? { ...bingoItem, isComplete: true, memberWhoCompletes: memberId }
          : bingoItem;
      });
    }

    const newBingoLines = checkBingoLines(newBingoData, bingo.bingoLines);
    const newBingoCount = newBingoLines.filter(bingoLine => bingoLine.isBingo).length;
    
    setBingo({
      bingoData: newBingoData,
      bingoLines: newBingoLines,
      bingoCount: newBingoCount,
      clickedBingoItemId: 0,
      completeType: undefined,
    });
  }

  const handleClickPopupSelectMemberDimDiv = () => {
    closePopupSelectMember();
  }

  const closePopupSelectMember = () => {
    setBingo({
      ...bingo,
      clickedBingoItemId: 0,
      completeType: undefined,
    });
  }

  const turnOnBingoCell = (id: number) => {
    
  }

  useEffect(() => {
    console.log('RENDER!');
    // callSequentially(turnOn, turnOff, bingo.bingoData, 21);
  });

  return (
    <div style={{
      width: '1240px',
      height: '700px',
      margin: 0,
      padding: 0,
      backgroundImage: `url(${BackgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
    }}>
      <img src={LogoBubbleImage} style={{ width: '100px', height: 'auto', position: 'absolute', top: '10px', left: '10px' }} />
      <img src={TitleImage} style={{ width: '800px', justifyContent: 'center', marginTop: '20px' }} />
      <div style={{ display: 'flex', width: '1240px', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{
          width: '550px',
          height: '550px',
          // backgroundColor: 'gray',
          boxSizing: 'border-box',
          padding: '25px',
          position: 'relative',
        }}>
          <BingoBoard
            bingoData={bingo.bingoData}
            onClickCell={handleClickBingoCell}
          />
          <RedPen
            checkedLines={bingo.bingoLines.filter(bingoLine => bingoLine.isBingo).map(bingoLine => bingoLine.id)}
          />
        </div>
        <div style={{
          width: '550px',
          height: '550px',
          // backgroundColor: 'darkgray',
          boxSizing: 'border-box',
          padding: '25px',
          display: 'flex',
          flexDirection: 'row',
        }}>
          <div style={{
            width: '200px',
            height: '500px',
            // backgroundColor: 'lightblue',
          }}>
            <BingoCountBoard bingoCount={bingo.bingoCount} />
            <Summon5LdButton onSummon={handleClickSummon5LdButton} />
            <Summon5WfwButton onSummon={handleClickSummon5WfwButton} />
          </div>
          <div style={{
            width: '300px',
            height: '500px',
            // backgroundColor: 'lightgreen',
          }}>
            <MissionRoulette />
          </div>
        </div>
      </div>
      <PopupSelectMember
        onClickPlayer={handleClickPopupSelectMember}
        onClickDimDiv={handleClickPopupSelectMemberDimDiv}
        clickedBingoItemId={bingo.clickedBingoItemId}
      />
    </div>
  );
};

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
      <button onClick={props.onClick}>각성 5성</button>
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

export default App;
