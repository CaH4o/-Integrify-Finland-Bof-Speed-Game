export interface ICircle {
  id: string;
  size: number;
  color: string;
  isTarget: boolean;
  top: string;
  left: string;
}

export type Circles = ICircle[];

export interface GameState {
  circles: Circles;
  score: number;
  isRunning: boolean;
  startTime: string;
  endTime: string;
  level: number;
  speed: number;
}