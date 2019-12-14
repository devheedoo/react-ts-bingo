import React, { useState, useEffect } from 'react';
import BingoData from '../BingoData';
import BingoLines from '../BingoLines';
import posed from 'react-pose';
import styled from 'styled-components';

const BingoBoard = (props: BingoProps) => {
  const {bingoData} = props;
  return (
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
        {/* <p style={{ margin: 0 }}>{id}</p>
        <p style={{ margin: 0 }}>{icon}</p>
        <p style={{ margin: 0 }}>{description}</p> */}
      </div>
    </div>
  );
}

export default BingoBoard;