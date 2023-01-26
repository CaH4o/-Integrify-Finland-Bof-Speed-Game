import { useState } from "react";
import { Box, Typography } from "@mui/material";

import { Circle, GameState } from "../types/Game";
import { RootState } from "../app/store";
import { useAppSelector } from "../app/hooks";
import Menu from "../components/Menu";
import Scores from "../components/Scores";
import { Circle as RenderCircle } from "../components/Circle";

export default function HomePage(): JSX.Element {
  const [circle, setCircle] = useState<Circle>({
    color: "black",
    isTarget: false,
    size: 4,
    handleClick,
  });
  const gameState: GameState = useAppSelector(function (state: RootState) {
    return state.game;
  });
  const isRunning: boolean = gameState.isRunning;

  function handleClick() {
    const isTarget: boolean = !circle.isTarget;
    setCircle({ ...circle, isTarget });
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
          <RenderCircle {...circle} />
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
