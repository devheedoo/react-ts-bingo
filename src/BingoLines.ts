const BingoLines: BingoLine[] = [
  // row
  {
    id: 'ROW_1',
    indexes: [1,2,3,4,5],
    isBingo: false,
  },
  {
    id: 'ROW_2',
    indexes: [6,7,8,9,10],
    isBingo: false,
  },
  {
    id: 'ROW_3',
    indexes: [11,12,13,14,15],
    isBingo: false,
  },
  {
    id: 'ROW_4',
    indexes: [16,17,18,19,20],
    isBingo: false,
  },
  {
    id: 'ROW_5',
    indexes: [21,22,23,24,25],
    isBingo: false,
  },
  // column
  {
    id: 'COLUMN_1',
    indexes: [1,6,11,16,21],
    isBingo: false,
  },
  {
    id: 'COLUMN_2',
    indexes: [2,7,12,17,22],
    isBingo: false,
  },
  {
    id: 'COLUMN_3',
    indexes: [3,8,13,18,23],
    isBingo: false,
  },
  {
    id: 'COLUMN_4',
    indexes: [4,9,14,19,24],
    isBingo: false,
  },
  {
    id: 'COLUMN_5',
    indexes: [5,10,15,20,25],
    isBingo: false,
  },
  // digonal
  {
    id: 'DIGONAL_RIGHT_DOWN',
    indexes: [1,7,13,19,25],
    isBingo: false,
  },
  {
    id: 'DIGONAL_RIGHT_UP',
    indexes: [5,9,13,17,21],
    isBingo: false,
  },
];

export default BingoLines;
