import { Button } from "@mui/material";

import { GameState } from "../types/Game";
import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { endGame, startGame } from "../redux/game/gameSlice";

export default function Menu() {
  const dispatch = useAppDispatch();
  const gameState: GameState = useAppSelector(function (state: RootState) {
    return state.game;
  });
  const isRunning: boolean = gameState.isRunning;

  function handleStartGame() {
    if (isRunning) dispatch(endGame());
    dispatch(startGame());
  }

  function handleEndGame() {
    dispatch(endGame());
  }

  return (
    <>
      <Button variant="outlined" className="btn" onClick={handleStartGame}>
        {isRunning ? "Reset the game" : "Start a new game"}
      </Button>
      {isRunning ? (
        <Button variant="outlined" className="btn" onClick={handleEndGame}>
          Stop the game
        </Button>
      ) : null}
    </>
  );
}
