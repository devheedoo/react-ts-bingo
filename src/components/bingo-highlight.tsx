import React, { useState } from 'react';
import posed from 'react-pose';

/**
 * input: 
 * - bingoData: bingoItem.isComplete === false
 * - targetId: 멈출 bingoItem.id (1 ~ 25)
 * output(?): time when highlight sequence ends
 */

const BingoHighlight = () => {
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
        return (
          <div style={{
            width: '100px',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <PosedHighlightBox
              pose={index % 2 === 0 ? 'light' : 'dark'}
              style={{
                width: '80px',
                height: '80px',
                display: 'block',
                backgroundColor: 'rgba(255,255,0,0.3)',
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

const PosedHighlightBox = posed.div({
  light: {
    display: 'block',
  },
  dark: {
    display: 'none',
  }
});

export default BingoHighlight;