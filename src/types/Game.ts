export interface GameState {
  score: number;
  isRunning: boolean;
  startTime: string;
  endTime: string;
  level: number;
  speed: number;
}

export interface Circle {
  size: number;
  color: string;
  handleClick(): void;
  isTarget: boolean;
}
