interface BingoProps {
  bingoData: BingoItem[];
  onClickCell: (id: number) => void;
}

interface BingoItem {
  id: number;
  icon: string;
  description: string;
  isComplete: boolean;
  isBingo: boolean;
}

interface BingoCellProps {
  bingoItem: BingoItem;
  onClick: (id: number) => void;
}

interface RouletteButtonProps {
  onClick: () => void;
}

interface BingoLine {
  id: string;
  indexes: number[];
  isBingo: boolean;
}

interface BingoStatusProps {
  bingoCount: number;
}

interface RedPenProps {
  checkedLines: string[];
}

interface RedLineProps {
  id: string;
  top: number;
  isColumn?: boolean;
  isDiagonal?: boolean;
}

declare module "*.png" {
  const value: any;
  export = value;
}