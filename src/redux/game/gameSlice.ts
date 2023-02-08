import { createSlice } from "@reduxjs/toolkit";

import { GameState } from "../../types/Game";

const initialState: GameState = {
  score: 0,
  isRunning: false,
  startTime: "hh:mm:ss",
  endTime: "hh:mm:ss",
  level: 3,
  speed: 1,
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    startGame: function (state: GameState) {
      const isRunning: boolean = true;
      return {...state, isRunning};
    },
    endGame: function (state: GameState) {
      const isRunning: boolean = false;
      return {...state, isRunning};
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
