import { Button, Typography } from "@mui/material";

export default function HomePage(): JSX.Element {

  return (
    <div>
      <header className="App-header flexClmnCenter">
        <Typography>Speed Game App - Extra assignment</Typography>
      </header>
      <main className="App-main flexClmnCenter">
        <Button variant="outlined" className="btn">
          Starts a new game
        </Button>
        <Button variant="outlined" className="btn">
          Stops the game
        </Button>
        <Button variant="outlined" className="btn">
          Resets the game
        </Button>
        <div className="App-header flexCenter">
          <Typography component="div">Score: {0}</Typography>
          <Typography component="div">Level: {0}</Typography>
        </div>
      </main>
      <footer className="App-footer flexClmnCenter">
        <Typography>&copy; Copyright, Integrify, OTI, 2023</Typography>
      </footer>
    </div>
  );
}
