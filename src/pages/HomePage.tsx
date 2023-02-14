import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import { ICircle, Circles, GameState } from "../types/Game";
import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Menu from "../components/Menu";
import Scores from "../components/Scores";
import Circle from "../components/Circle";
import { endGame } from "../redux/game/gameSlice";

export default function HomePage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [isWin, setIsWin] = useState<boolean>(false);
  const gameState: GameState = useAppSelector(function (state: RootState) {
    return state.game;
  });
  const isRunning: boolean = gameState.isRunning;
  const circles: Circles = gameState.circles;
  const level: number = gameState.level;

  useEffect(
    function () {
      if (level > 20) {
        setIsWin(true);
        dispatch(endGame());
      }
    },
    [level]
  );

  return (
    <>
      <Box component="header" className="App-header flexCenter">
        <Typography component="h4" variant="h4">
          Speed Game App - Extra assignment
        </Typography>
        {isRunning ? (
          <>
            <Menu />
            <Scores />
          </>
        ) : null}
      </Box>
      <Box component="main" className="App-main flexClmnCenter">
        {isRunning ? (
          circles.map(function (circle: ICircle) {
            return <Circle key={circle.id} {...circle} />;
          })
        ) : (
          <>
            {isWin ? (
              <Typography component="h5" variant="h5">
                Congratualtion! You are win!!! Try one more time?!
              </Typography>
            ) : null}
            <Box component="div" className="flexClmnCenter">
              <Menu />
              <Scores />
            </Box>
          </>
        )}
      </Box>
      <footer className="App-footer flexClmnCenter">
        <Typography>&copy; Copyright, Integrify, OTI, 2023</Typography>
      </footer>
    </>
  );
}
