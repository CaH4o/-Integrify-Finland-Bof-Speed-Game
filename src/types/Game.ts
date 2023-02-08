export interface GameState {
  score: number;
  isRunning: boolean;
  startTime: string;
  endTime: string;
  level: number;
  speed: number;
}

export interface Circle {
  id: string;
  size: number;
  color: string;
  isTarget: boolean;
  top: string;
  left: string;
}

export interface CircleProp {
  circle: Circle;
  handleClick(circle: Circle): void;
}

export type Circles = Circle[];
