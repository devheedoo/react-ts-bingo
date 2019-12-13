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

interface GoldenBellLineProps {
  id: number;
  top: number;
  randomId: number;
  show: boolean;
  isColumn?: boolean;
  isDigonal?: boolean;
}
