import { Button } from "@mui/material";

import { useAppDispatch } from "../app/hooks";
import { endGame, startGame } from "../redux/game/gameSlice";

export default function Menu() {
  const dispatch = useAppDispatch();

  function handleStartGame() {
    dispatch(startGame());
  }

  function handleEndGame() {
    dispatch(endGame());
  }

  function handleResetGame() {
    dispatch(endGame());
    dispatch(startGame());
  }

  return (
    <>
      <Button variant="outlined" className="btn" onClick={handleStartGame}>
        Starts a new game
      </Button>
      <Button variant="outlined" className="btn" onClick={handleEndGame}>
        Stops the game
      </Button>
      <Button variant="outlined" className="btn" onClick={handleResetGame}>
        Resets the game
      </Button>
    </>
  );
}
