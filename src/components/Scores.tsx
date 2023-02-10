import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

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
  const lives: boolean[] = gameState.lives;

  return (
    <div className="App-header flexCenter">
      {isRunning ? (
        <Typography component="div">Score: {score}</Typography>
      ) : null}
      <Typography component="div">Level: {level}</Typography>
      <Typography component="div">Speed: {speed}</Typography>
      {isRunning
        ? lives.map(function (b: boolean) {
            return b ? (
              <FavoriteIcon sx={{ color: "red" }} />
            ) : (
              <HeartBrokenIcon sx={{ color: "gray" }}/>
            );
          })
        : null}
    </div>
  );
}
