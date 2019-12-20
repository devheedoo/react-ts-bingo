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
  completedType: CompleteType;
  isPopupOpen: boolean;
}

const BingoHighlight = (props: BingoHighlightProps) => {
  const {incompleteIds, targetId, completedType, isPopupOpen} = props;
  const startingId = incompleteIds[0];
  const [highlighting, setHighlighting] = useState({
    id: startingId,
    aniTimeAcc: 0,
  });

  if (!isPopupOpen) {
    // - 0.05 * 20 = 1 sec
    // - (Variable) 0.05 * 50 or 0.1 * 25 = 2.5 sec
    // - 0.1 * 5 = 0.5 sec
    // - 0.25 * 2 = 0.5 sec
    // - 0.5 * 2 = 1 sec
    // > 29 + (25 ~ 50) 
    
    const {cell50Count, cell100Count} = getVariableCellsCount(
      incompleteIds.length,
      incompleteIds.indexOf(targetId)
    );

    if (completedType === 'SUMMON_5_WFW' || completedType === 'SUMMON_5_LD') {
      // 한 칸씩
      const nextId = incompleteIds[getNextIndex(incompleteIds, incompleteIds.indexOf(highlighting.id))];
      if (highlighting.aniTimeAcc < 1000 + 50 * cell50Count) {
        setTimeout(() => {
          setHighlighting({
            id: nextId,
            aniTimeAcc: highlighting.aniTimeAcc + 50,
          });
        }, 50);
      } else if (highlighting.aniTimeAcc < 4000) {
        setTimeout(() => {
          setHighlighting({
            id: nextId,
            aniTimeAcc: highlighting.aniTimeAcc + 100,
          });
        }, 100);
      } else if (highlighting.aniTimeAcc < 4500) {
        setTimeout(() => {
          setHighlighting({
            id: nextId,
            aniTimeAcc: highlighting.aniTimeAcc + 250,
          });
        }, 250);
      } else if (highlighting.aniTimeAcc < 5000) {
        setTimeout(() => {
          setHighlighting({
            id: nextId,
            aniTimeAcc: highlighting.aniTimeAcc + 500,
          });
        }, 500);
      } else if (highlighting.aniTimeAcc < 6000) {
        setTimeout(() => {
          setHighlighting({
            id: nextId,
            aniTimeAcc: highlighting.aniTimeAcc + 1000,
          });
        }, 1000);
      } else {
        setHighlighting({
          id: nextId,
          aniTimeAcc: 0,
        });
      }
    } else {
      // dark
    }
  }

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
        const poseState = completedType && isHighlighted && (index + 1 === highlighting.id) ? 'light' : 'dark';
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

const getVariableCellsCount = (listLength: number, targetIndex: number) => {
  let i = 25;
  for (;i<50;i++) {
    if ((29 + i - targetIndex) % listLength === 0) {
      break;
    }
  }
  // i === 49 ? cell500: 48, cell1000: 1
  // i === 48 ? cell500: 46, cell1000: 2
  // i === 47 ? cell500: 44, cell1000: 3
  return {
    cell50Count: 2 * i - 50,
    cell100Count: 50 - i
  };
}

const PosedHighlightBox = posed.div({
  light: {
    opacity: 1,
    transition: { duration: 100 },
  },
  dark: {
    opacity: 0,
    transition: { duration: 100 },
  }
});

export default BingoHighlight;