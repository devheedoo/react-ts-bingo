interface BingoProps {
  bingoData: BingoItem[];
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