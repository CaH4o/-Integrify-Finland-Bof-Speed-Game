import { createSlice } from "@reduxjs/toolkit";

import { gameState } from "../../types/Game";

const initialState: gameState = {
  score: 0,
  isRunning: false,
  startTime: "0:0",
  endTime: "0:0",
  level: 1,
  speed: 1,
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    startGame: function (state: gameState) {
      return state;
    },
    endGame: function (state: gameState) {
      return state;
    },
    increaseScore: function (state: gameState) {
      return state;
    },
    decreaseLives: function (state: gameState) {
      return state;
    },
    increaseLevel: function (state: gameState) {
      return state;
    },
    decreaseTimer: function (state: gameState) {
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
