import { Typography } from "@mui/material";

import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { GameState } from "../types/Game";

export default function Scores() {
  const gameState: GameState = useAppSelector(function (state: RootState) {
    return state.game;
  });
  const isRunning: boolean = gameState.isRunning;
  const score: number = gameState.score;
  const level: number = gameState.level;
  const speed: number = gameState.speed;

  return (
    <div className="App-header flexCenter">
      {isRunning ? (
        <Typography component="div">Score: {score}</Typography>
      ) : null}
      <Typography component="div">Level: {level}</Typography>
      <Typography component="div">Speed: {speed}</Typography>
    </div>
  );
}
