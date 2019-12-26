/// <reference path='../index.d.ts' />

import React, { useState, useEffect } from 'react';
import BingoData from '../bingo-data';
import BingoLines from '../bingo-lines';

import BackgroundImage from '../images/background.png';
import TitleImage from '../images/title.png';
import LogoBubbleImage from '../images/logo_bubble.png';

import BingoBoard from './bingo-board';
import RedPen from './red-pen';
import BingoCountBoard from './bingo-count-board';
import Summon5LdButton from './summon-5-ld';
import Summon5WfwButton from './summon-5-wfw';
import MissionRoulette from './mission-roulette';
import PopupSelectMember from './popup-select-member';

const App = () => {
  const [bingo, setBingo] = useState<AppState>({
    bingoData: BingoData,
    bingoLines: BingoLines,
    bingoCount: 0,
    clickedBingoItemId: 0,
    completeType: undefined,
    isPopupOpen: false,
    history: [],
  });

  // click handlers
  const handleClickSummon5WfwButton = () => {
    const randomBingoItemId: number = getRandomIncompleteBingoItemId(bingo.bingoData);
    if (randomBingoItemId === -1) {
      console.log(`No incomplete item remains`);
      return;
    }
    setBingo({
      ...bingo,
      isPopupOpen: true,
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
      isPopupOpen: true,
      clickedBingoItemId: randomBingoItemId,
      completeType: 'SUMMON_5_LD',
    });
  }

  const handleClickBingoCell = (id: number) => {
    setBingo({
      ...bingo,
      isPopupOpen: true,
      clickedBingoItemId: id,
      completeType: 'MISSION_CLEAR',
    });
  }

  const handleClickPopupSelectMember = (memberId: PlayerId) => {
    const {bingoData, clickedBingoItemId, completeType} = bingo;
    const {
      newBingoData,
      completeBingoItemIds,
    } = getBingoDataAndIdsAfterComplete(memberId, completeType, bingoData, clickedBingoItemId);

    const newBingoLines = checkBingoLines(newBingoData, bingo.bingoLines);
    const newBingoCount = newBingoLines.filter(bingoLine => bingoLine.isBingo).length;
    
    const history = bingo.history.slice();
    history.push({
      completeBingoItemIds: completeBingoItemIds,
      completeMemberId: memberId,
      completeType: bingo.completeType,
    });

    const animatingTime = completeType === 'MISSION_CLEAR' ? 100 : 6000;
    setTimeout(() => {
      if (window.location.href.indexOf('#') < 0) {
        window.location.href = window.location.href + `#${memberId}_${completeBingoItemIds}`
      } else {
        window.location.href = window.location.href + `-${memberId}_${completeBingoItemIds}`
      }
      setBingo({
        ...bingo,
        bingoData: newBingoData,
        bingoLines: newBingoLines,
        bingoCount: newBingoCount,
        isPopupOpen: false,
        completeType: undefined,
        history: history,
      });
    }, animatingTime);
    setBingo({
      ...bingo,
      isPopupOpen: false,
    })
  }

  const handleClickPopupSelectMemberDimDiv = () => {
    closePopupSelectMember();
  }

  const closePopupSelectMember = () => {
    setBingo({
      ...bingo,
      isPopupOpen: false,
      completeType: undefined,
    });
  }

  // render
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
          boxSizing: 'border-box',
          padding: '20px',
          position: 'relative',
        }}>
          <BingoBoard
            bingoData={bingo.bingoData}
            clickedBingoItemId={bingo.clickedBingoItemId}
            onClickCell={handleClickBingoCell}
            completeType={bingo.completeType}
            isPopupOpen={bingo.isPopupOpen}
          />
          <RedPen
            checkedLines={bingo.bingoLines.filter(bingoLine => bingoLine.isBingo).map(bingoLine => bingoLine.id)}
          />
        </div>
        <div style={{
          width: '550px',
          height: '550px',
          boxSizing: 'border-box',
          padding: '25px',
          display: 'flex',
          flexDirection: 'row',
        }}>
          <div style={{
            width: '200px',
            height: '500px',
          }}>
            <BingoCountBoard bingoCount={bingo.bingoCount} />
            <Summon5LdButton onSummon={handleClickSummon5LdButton} />
            <Summon5WfwButton onSummon={handleClickSummon5WfwButton} />
          </div>
          <div style={{
            width: '300px',
            height: '500px',
          }}>
            <MissionRoulette />
          </div>
        </div>
      </div>
      <PopupSelectMember
        onClickPlayer={handleClickPopupSelectMember}
        onClickDimDiv={handleClickPopupSelectMemberDimDiv}
        isPopupOpen={bingo.isPopupOpen}
      />
    </div>
  );
};

// 랜덤 빙고 칸 ID 얻기
const getRandomIncompleteBingoItemId = (bingoList: BingoItem[]): number => {
  const incompleteBingoList = bingoList.filter(bingo => !bingo.isComplete);
  const nextIndex = Math.floor(Math.random() * (incompleteBingoList.length));
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

// 한 줄 또는 한 칸 완성하기
const getBingoDataAndIdsAfterComplete = (
  memberId: PlayerId,
  completeType: CompleteType,
  bingoData: BingoItem[],
  clickedBingoItemId: number,
) => {
  let newBingoData: BingoItem[] = bingoData;
  let completeBingoItemIds: number[] = [];
  if (completeType && completeType === 'SUMMON_5_LD') {
    // Complete 1 line
    const cellId = clickedBingoItemId;
    const randomBingoLines = BingoLines.filter(bingoLine => bingoLine.indexes.includes(cellId));
    const randomIndex = Math.floor(Math.random() * randomBingoLines.length);
    const randomBingoLineCellIds = randomBingoLines[randomIndex].indexes;
    newBingoData = bingoData.map(bingoItem => {
      if (
        randomBingoLineCellIds.includes(bingoItem.id) &&
        !bingoItem.isComplete
      ) {
        completeBingoItemIds.push(bingoItem.id);
        return { ...bingoItem, isComplete: true, memberWhoCompletes: memberId };
      } else {
        return bingoItem;
      }
    })
  } else {
    // Complete 1 cell
    newBingoData = bingoData.map(bingoItem => {
      if (bingoItem.id === clickedBingoItemId) {
        completeBingoItemIds.push(bingoItem.id);
        return { ...bingoItem, isComplete: true, memberWhoCompletes: memberId }
      } else {
        return bingoItem;
      }
    });
  }
  return { newBingoData, completeBingoItemIds };
}

export default App;
