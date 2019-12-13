/// <reference path='../index.d.ts' />

import React, { useState, useEffect } from 'react';
import BingoData from '../BingoData';
import BingoLines from '../BingoLines';
import posed from 'react-pose';

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
    <div>
      <h1>MEMORY</h1>
      <div style={{ display: 'flex' }}>
        <Mission />
      </div>
      <div style={{ display: 'flex', position: 'relative', }}>
        <Bingo
          bingoData={bingo.bingoData}
          onClickCell={handleClickBingoCell}
        />
        <GoldenBell />
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

const Mission = () => {
  const [hovering, setHovering] = useState('idle');
  return (
    <div style={{
      width: '1100px',
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
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
          <li>Mission1</li>
          <li>Mission2</li>
          <li>Mission3</li>
          <li>Mission4</li>
          <li>Mission5</li>
          <li>Mission6</li>
          <li>Mission7</li>
          <li>Mission8</li>
          <li>Mission9</li>
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
              onClick={props.onClickCell}
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

  const handleClick = () => {
    console.log(`handleClick`);
    props.onClick(id);
  }

  return (
    <div style={{
      width: '100px',
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onClick={handleClick}>
      <div
        style={{
          width: '80px',
          height: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: backgroundColor,
          flexDirection: 'column',
        }}
      >
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
      <button onClick={() => setLine({ randomId: Math.floor(Math.random() * 12), show: true })}>Call</button>
      <div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          top: '25px',
          left: '25px',
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        {highlightList.map(highlight => {
          return (
            <GoldenBellLine
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

const GoldenBellLine = (props: GoldenBellLineProps) => {
  const {id, top, randomId, show, isColumn, isDigonal} = props;
  const isDisplaying = (show && id === randomId) ? 'block' : 'none';
  if (isColumn && !isDigonal) {
    return (
      <div
        style={{
          position: 'absolute',
          width: '100px',
          height: '500px',
          top: 0,
          left: top,
          backgroundColor: 'rgba(240,255,0,0.3)',
          display: isDisplaying,
        }}
      ></div>
    );
  }
  if (isDigonal) {
    if (isColumn) {
      return (
        <div
          style={{
            position: 'absolute',
            width: '1000px',
            height: '120px',
            top: 190,
            left: -250,
            transform: 'rotate(-45deg)',
            backgroundColor: 'rgba(240,255,0,0.3)',
            display: isDisplaying,
          }}
        ></div>
      );
    } else {
      return (
        <div
          style={{
            position: 'absolute',
            width: '1000px',
            height: '120px',
            top: 190,
            left: -250,
            transform: 'rotate(45deg)',
            backgroundColor: 'rgba(240,255,0,0.3)',
            display: isDisplaying,
          }}
        ></div>
      );
    }
  }
  return (
    <div
      style={{
        position: 'absolute',
        width: '500px',
        height: '100px',
        top: top,
        left: 0,
        backgroundColor: 'rgba(240,255,0,0.3)',
        display: isDisplaying,
      }}
    ></div>
  );
}


const GoldenBellLinePosed = posed.div({
  idle: {
    top: 0,
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  },
  spin: {
    top: 100,
    transition: {
      default: { ease: 'easeInOut', duration: 5000 }
    }
  }
})

const callGoldenBell = () => {

}

export default App;
