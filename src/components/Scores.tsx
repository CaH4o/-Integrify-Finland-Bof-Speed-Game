import { Typography } from "@mui/material";

import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { GameState } from "../types/Game";

export default function Scores() {
  const gameState: GameState = useAppSelector(function (state: RootState) {
    return state.game;
  });
  const score: number = gameState.score;
  const level: number = gameState.level;

  return (
    <div className="App-header flexCenter">
      <Typography component="div">Score: {score}</Typography>
      <Typography component="div">Level: {level}</Typography>
    </div>
  );
}
