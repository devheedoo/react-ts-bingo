/// <reference path='../index.d.ts' />

import React, { useState, useEffect } from 'react';
import BingoData from '../BingoData';
import BingoLines from '../BingoLines';
import posed from 'react-pose';
import styled from 'styled-components';

import BackgroundImage from '../images/background.png';
import TitleImage from '../images/title.png';

import Bingo from './Bingo';
import Mission from './Mission';

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
      margin: 0,
      padding: 0,
      backgroundImage: `url(${BackgroundImage})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <img src={TitleImage} style={{ width: '800px', justifyContent: 'center' }} />
      <div style={{ display: 'flex', width: '1240px', flexDirection: 'row', justifyContent: 'center' }}>
        <Bingo
          bingoData={bingo.bingoData}
          onClickCell={handleClickBingoCell}
        />
        <GoldenBell />
        {/* </div> */}
        <Mission />
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

const GoldenBell = () => {
  const [line, setLine] = useState({
    randomId: 0,
    show: false,
  });
  const highlightList = [
    {id: 0, top: 0},
    {id: 1, top: 100},
    {id: 2, top: 200},
    {id: 3, top: 300},
    {id: 4, top: 400},
    {id: 5, top: 0, isColumn: true},
    {id: 6, top: 100, isColumn: true},
    {id: 7, top: 200, isColumn: true},
    {id: 8, top: 300, isColumn: true},
    {id: 9, top: 400, isColumn: true},
    {id: 10, top: 0, isDigonal: true},
    {id: 11, top: 0, isColumn: true, isDigonal: true},
  ];
  return (
    <>
      {/* <button onClick={() => setLine({ randomId: Math.floor(Math.random() * 12), show: true })}>Call</button> */}
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          top: '25px',
          left: '75px',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {highlightList.map(highlight => {
          return (
            <StyledGoldenBellLinePosed
              pose={'idle'}
              id={highlight.id}
              top={highlight.top}
              randomId={line.randomId}
              show={line.show}
              isColumn={highlight.isColumn}
              isDigonal={highlight.isDigonal}
            />
          );
        })}
      </div>
    </>
  );
}

const GoldenBellLinePosed = posed.div({
  idle: {
    // top: 0,
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  spin: {
    // top: 100,
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  }
});

const BINGO_LINE_THICKNESS = 20;
const BINGO_LINE_LENGTH = 500;
const BINGO_LINE_LENGTH_DIAGONAL = 1000;

const StyledGoldenBellLinePosed = styled(GoldenBellLinePosed)<GoldenBellLineProps>`
  position: absolute;
  width: ${props => props.isDigonal ? BINGO_LINE_LENGTH_DIAGONAL : (!props.isColumn ? BINGO_LINE_LENGTH : BINGO_LINE_THICKNESS)}px;
  height: ${props => props.isColumn && !props.isDigonal ? BINGO_LINE_LENGTH : BINGO_LINE_THICKNESS}px;
  top: ${props => props.isDigonal ? 240 : (!props.isColumn ? props.top + 40 : 0)}px;
  left: ${props => props.isDigonal ? -250 : (props.isColumn ? props.top + 40 : 0)}px;
  transform: ${props => props.isDigonal ? (props.isColumn ? 'rotate(-45deg)' : 'rotate(45deg)') : ''};
  background-color: rgba(255,0,0,0.3);
  display: ${props => props.show && props.id === props.randomId ? 'block' : 'none'};
  /* display: 'block'; */
`;

const callGoldenBell = () => {

}

export default App;
