import React from 'react';

import BingoHighlight from './bingo-highlight';
import BingoCell from './bingo-cell';

const BingoBoard = (props: BingoBoardProps) => {
  const {bingoData, clickedBingoItemId, completeType, isPopupOpen} = props;
  const incompleteIds = bingoData
    .filter(bingoItem => !bingoItem.isComplete)
    .map(bingoItem => bingoItem.id);

  return (
    <div style={{ 
      width: '510px',
      height: '510px',
      display: 'flex',
      flexWrap: 'wrap',
      position: 'relative',
      alignItems: 'flex-start',
      backgroundColor: 'white',
      backgroundImage: 'repeating-linear-gradient(45deg, rgba(201,24,24,0.8), rgba(201,24,24,0.8) 10px, rgba(17,153,24,0.8) 10px, rgba(17,153,24,0.8) 20px)',
    }}>
      <div style={{
        position: 'absolute',
        width: '500px',
        height: '500px',
        top: 0,
        left: 0,
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
      <BingoHighlight
        incompleteIds={incompleteIds}
        targetId={clickedBingoItemId}
        completedType={completeType}
        isPopupOpen={isPopupOpen}
      />
    </div>
  );
}


export default BingoBoard;