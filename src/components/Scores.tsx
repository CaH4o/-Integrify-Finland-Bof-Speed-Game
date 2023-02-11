import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { GameState } from "../types/Game";
import { useEffect, useState } from "react";

export default function Scores() {
  const gameState: GameState = useAppSelector(function (state: RootState) {
    return state.game;
  });
  const isRunning: boolean = gameState.isRunning;
  const score: number = gameState.score;
  const level: number = gameState.level;
  const speed: number = gameState.speed;
  const lives: boolean[] = gameState.lives;
  const gameDuration: number = 10;
  const [time, setTime] = useState<number>(gameDuration);

  useEffect(
    function () {
      let timer;
      if (time > 0) {
        const timer = setTimeout(handleTime, 1000);
      }
      return clearTimeout(timer);
    },
    [time]
  );

  useEffect(
    function () {
      setTime(gameDuration);
    },
    [level]
  );

  function handleTime() {
    setTime(time - 1);
  }

  return (
    <div className="App-header flexCenter">
      {isRunning ? (
        <Typography component="div">Score: {score}</Typography>
      ) : null}
      <Typography component="div">Level: {level}</Typography>
      <Typography component="div">Speed: {speed}</Typography>
      {isRunning
        ? lives.map(function (b: boolean, i: number) {
            return b ? (
              <FavoriteIcon key={i} sx={{ color: "red" }} />
            ) : (
              <HeartBrokenIcon key={i} sx={{ color: "gray" }} />
            );
          })
        : null}
        <Typography component="div">Time: {time}</Typography>
    </div>
  );
}
