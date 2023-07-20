export enum PieceTypes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
export type Pieces = {
  [PieceTypes.SMALL]: number;
  [PieceTypes.MEDIUM]: number;
  [PieceTypes.LARGE]: number;
}
