/// <reference path='../index.d.ts' />

import React, { useState, useEffect } from 'react';
import BingoData from '../bingo-data';
import BingoLines from '../bingo-lines';
import posed from 'react-pose';
import styled from 'styled-components';

import BackgroundImage from '../images/background.png';
import TitleImage from '../images/title.png';
import BingoCount0Image from '../images/bingo_count_0.png';
import BingoCount1Image from '../images/bingo_count_1.png';
import BingoCount2Image from '../images/bingo_count_2.png';
import BingoCount3Image from '../images/bingo_count_3.png';
import BingoCount4Image from '../images/bingo_count_4.png';
import BingoCount5Image from '../images/bingo_count_5.png';
import BingoCount6Image from '../images/bingo_count_6.png';
import BingoCount7Image from '../images/bingo_count_7.png';
import BingoCount8Image from '../images/bingo_count_8.png';
import BingoCount9Image from '../images/bingo_count_9.png';
import BingoCountFrameImage from '../images/bingo_count_frame.png';
import RouletteButtonImage from '../images/roulette_button.png';
import RouletteCoverImage from '../images/roulette_cover.png';
import RouletteFrameImage from '../images/roulette_frame.png';
import Summon5WfwImage from '../images/summon_5_wfw.png';
import LogoBubbleImage from '../images/logo_bubble.png';

import BingoBoard from './bingo-board';
import Mission from './mission';
import RedPen from './red-pen';
import BingoCountBoard from './bingo-count-board';
import Summon5LdButton from './summon-5-ld';
import Summon5WfwButton from './summon-5-wfw';
import MissionRoulette from './mission-roulette';

const App = () => {
  const [bingo, setBingo] = useState({
    bingoData: BingoData,
    bingoLines: BingoLines,
    bingoCount: 0,
  });
  const [history, setHistory] = useState([]);

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

  const handleClickBingoCell = (id: number) => {
    console.log(`handleClickBingoCell called`);
    const newBingoData: BingoItem[] = bingo.bingoData.map(bingoItem => {
      return bingoItem.id === id ? { ...bingoItem, isComplete: true } : bingoItem;
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
            <Summon5LdButton />
            <Summon5WfwButton />
          </div>
          <div style={{
            width: '300px',
            height: '500px',
            position: 'relative',
            // backgroundColor: 'lightgreen',
          }}>
            <MissionRoulette />
          </div>
        </div>
        {/* <Bingo
          bingoData={bingo.bingoData}
          onClickCell={handleClickBingoCell}
        />
        <GoldenBell />
        <Mission /> */}
      </div>
      {/* <div style={{ display: 'flex', position: 'relative' }}>
        <div style={{ width: '300px', height: '550px', backgroundColor: 'lightgray' }}>
          <BingoStatus
            bingoCount={bingo.bingoCount}
          />
          <RouletteButton
            onClick={handleClickRouletteButton}
          />
        </div>
      </div> */}
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
