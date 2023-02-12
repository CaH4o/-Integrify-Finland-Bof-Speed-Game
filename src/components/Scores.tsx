import React, { useEffect, useState } from "react";
import { Typography, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { GameState } from "../types/Game";
import {
  increaseLevel,
  decreaseLevel,
  increaseSpeed,
  decreaseSpeed,
  decreaseLives,
  endGame,
} from "../redux/game/gameSlice";

export default function Scores() {
  const dispatch = useAppDispatch();
  const gameState: GameState = useAppSelector(function (state: RootState) {
    return state.game;
  });
  const isRunning: boolean = gameState.isRunning;
  const score: number = gameState.score;
  const level: number = gameState.level;
  const speed: number = gameState.speed;
  const lives: boolean[] = gameState.lives;
  const gameDuration: number = gameState.time;
  const [time, setTime] = useState<number>(gameDuration);
  let timer: NodeJS.Timeout | undefined = undefined;

  useEffect(
    function () {
      if (isRunning) {
        if (time > 0) {
          timer = setTimeout(handleTime, 5000 / speed  );
        } else {
          dispatch(decreaseLives());
        }

        return function () {
          clearTimeout(timer);
        };
      }
    },
    [time]
  );

  useEffect(
    function () {
      const isAlive: boolean = lives.some(function (b: boolean) {
        return b;
      });
      if (isAlive) {
        setTime(gameDuration);
      } else {
        dispatch(endGame());
      }
    },
    [level, lives]
  );

  function handleTime() {
    setTime(time - 1);
  }

  function handleLevelUp() {
    dispatch(increaseLevel());
  }

  function handleLevelDown() {
    dispatch(decreaseLevel());
  }

  function handleSpeedUp() {
    dispatch(increaseSpeed());
  }

  function handleSpeedDown() {
    dispatch(decreaseSpeed());
  }

  return (
    <div className="App-header flexCenter">
      {isRunning ? (
        <Typography component="div">Score: {score}</Typography>
      ) : null}

      <div>
        {!isRunning ? (
          <Button onClick={handleLevelUp}>
            <ArrowDropUpIcon />
          </Button>
        ) : null}
        <Typography component="div">Level: {level}</Typography>
        {!isRunning ? (
          <Button onClick={handleLevelDown}>
            <ArrowDropDownIcon />
          </Button>
        ) : null}
      </div>

      <div>
        {!isRunning ? (
          <Button onClick={handleSpeedUp}>
            <ArrowDropUpIcon />
          </Button>
        ) : null}
        <Typography component="div">Speed: {speed}</Typography>
        {!isRunning ? (
          <Button onClick={handleSpeedDown}>
            <ArrowDropDownIcon />
          </Button>
        ) : null}
      </div>

      {isRunning
        ? lives.map(function (b: boolean, i: number) {
            return b ? (
              <FavoriteIcon key={i} sx={{ color: "red" }} />
            ) : (
              <HeartBrokenIcon key={i} sx={{ color: "gray" }} />
            );
          })
        : null}

      {isRunning ? <Typography component="div">Time: {time}</Typography> : null}
    </div>
  );
}
