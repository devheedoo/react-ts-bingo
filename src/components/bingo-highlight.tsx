import React, { useState } from 'react';
import posed from 'react-pose';

/**
 * input: 
 * - bingoData: bingoItem.isComplete === false
 * - targetId: 멈출 bingoItem.id (1 ~ 25)
 * output(?): time when highlight sequence ends
 */

interface BingoHighlightProps {
  incompleteIds: number[];
  targetId: number;
}

const BingoHighlight = (props: BingoHighlightProps) => {
  const {incompleteIds, targetId} = props;
  const startingId = incompleteIds[0];
  const [highlightingId, setHighlightingId] = useState<number>(startingId);
  setTimeout(() => {
    setHighlightingId(incompleteIds[getNextIndex(incompleteIds, incompleteIds.indexOf(highlightingId))]);
  }, 100);
  // setTimeout(() => setHighlightingId(highlightingId + 1), 100);
  // const [isTimeToHighlight, setIsTimeToHighlight] = useState<boolean>(true);
  // setInterval(() => setIsTimeToHighlight(!isTimeToHighlight), 1000)
  // console.log(incompleteIds);
  return (
    <div style={{
      position: 'absolute',
      width: '500px',
      height: '500px',
      top: 0,
      left: 0,
      display: 'flex',
      flexWrap: 'wrap',
      pointerEvents: 'none',
    }}>
      {Array(25).fill(undefined).map((item, index) => {
        const isHighlighted = incompleteIds.includes(index + 1);
        const poseState = isHighlighted && (index + 1 === highlightingId) ? 'light' : 'dark';
        // console.log(poseState);
        return (
          <div style={{
            width: '100px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <PosedHighlightBox
              pose={poseState}
              style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'rgba(255,255,0)',
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

const callSequentially = (
  turnOnFunc: any,
  turnOffFunc: any,
  iteratingSequence: any[], // bingoData.filter(bingoItem => !bingoItem.isComplete)
  targetIndex: number,  // 1 ~ 25
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

const PosedHighlightBox = posed.div({
  light: {
    opacity: 1,
    transition: { duration: 300 },
  },
  dark: {
    opacity: 0,
    transition: { duration: 300 },
  }
});

export default BingoHighlight;