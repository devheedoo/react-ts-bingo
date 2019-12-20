interface AppState {
  bingoData: BingoItem[];
  bingoLines: BingoLine[];
  bingoCount: number;
  clickedBingoItemId: number;
  isPopupOpen: boolean;
  completeType?: CompleteType;
  history?: any[];
}

interface BingoBoardProps {
  bingoData: BingoItem[];
  clickedBingoItemId: number;
  completeType?: CompleteType;
  onClickCell: (id: number) => void;
  isPopupOpen: boolean;
}

interface BingoItem {
  id: number;
  isComplete: boolean;
  isBingo: boolean;
  memberWhoCompletes: PlayerId | undefined;
  isHighlighted: boolean;
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

type CompleteType = 'MISSION_CLEAR' | 'SUMMON_5_LD' | 'SUMMON_5_WFW';

type PlayerId = 
 | 'Amd'
 | 'Bitter'
 | 'Choco'
 | 'Cube'
 | 'Darkkom'
 | 'Giveme'
 | 'Guri'
 | 'Gyul'
 | 'Haedal'
 | 'Hichu'
 | 'Kkasi'
 | 'Penguin'
 | 'Wonang';

interface Player {
  id: PlayerId,
  fullImage: any;
  profileImage: any;
}

interface SummonButtonProps {
  onSummon: () => void;
}