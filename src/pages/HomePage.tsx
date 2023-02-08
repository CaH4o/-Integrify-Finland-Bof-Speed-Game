import { useState } from "react";
import { Box, Typography } from "@mui/material";

import { Circle, Circles, GameState } from "../types/Game";
import { RootState } from "../app/store";
import { useAppSelector } from "../app/hooks";
import Menu from "../components/Menu";
import Scores from "../components/Scores";
import { Circle as RenderCircle } from "../components/Circle";
import { createCurcles } from "../app/functions";

export default function HomePage(): JSX.Element {
  const gameState: GameState = useAppSelector(function (state: RootState) {
    return state.game;
  });
  const isRunning: boolean = gameState.isRunning;
  const level: number = gameState.level;
  const [circles, setCircles] = useState<Circles>(createCurcles(level));


  function handleClick(circle: Circle) {
    const newCircle: Circle = circles.find(function (c: Circle) {
      return c.id === circle.id;
    })!;
    newCircle.isTarget = !newCircle.isTarget;
    setCircles([...circles, newCircle]);
  }

  return (
    <>
      <Box component="header" className="App-header flexCenter">
        <Typography component="h4">
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
          circles.map(function (circle: Circle) {
            return <RenderCircle key={circle.id} circle={circle} handleClick={handleClick} />;
          })
        ) : (
          <Box component="div" className="flexClmnCenter">
            <Menu />
            <Scores />
          </Box>
        )}
      </Box>
      <footer className="App-footer flexClmnCenter">
        <Typography>&copy; Copyright, Integrify, OTI, 2023</Typography>
      </footer>
    </>
  );
}
