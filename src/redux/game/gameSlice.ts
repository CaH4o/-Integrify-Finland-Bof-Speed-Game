import { createSlice } from "@reduxjs/toolkit";

import { GameState } from "../../types/Game";

const initialState: GameState = {
  score: 0,
  isRunning: false,
  startTime: "hh:mm:ss",
  endTime: "hh:mm:ss",
  level: 1,
  speed: 1,
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    startGame: function (state: GameState) {
      return state;
    },
    endGame: function (state: GameState) {
      return state;
    },
    increaseScore: function (state: GameState) {
      return state;
    },
    decreaseLives: function (state: GameState) {
      return state;
    },
    increaseLevel: function (state: GameState) {
      return state;
    },
    decreaseTimer: function (state: GameState) {
      return state;
    },
  },
});

const gameReducer = gameSlice.reducer;
export const {
  startGame,
  endGame,
  increaseScore,
  decreaseLives,
  increaseLevel,
  decreaseTimer,
} = gameSlice.actions;
export default gameReducer;
