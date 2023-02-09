import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createCurcles } from "../../app/functions";

import { ICircle, Circles, GameState } from "../../types/Game";

const initialState: GameState = {
  circles: [],
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
      const circles: Circles = createCurcles(state.level);
      const score: number = 0;
      const isRunning: boolean = true;
      return { ...state, circles, isRunning, score };
    },
    endGame: function (state: GameState) {
      const isRunning: boolean = false;
      return { ...state, isRunning };
    },
    increaseScore: function (state: GameState) {
      const score: number = state.score + 1;
      return { ...state, score };
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
    deleteCiecle(state: GameState, action: PayloadAction<ICircle>) {
      const circles: Circles = state.circles.filter(function (circle: ICircle) {
        return circle.id !== action.payload.id;
      });
      return { ...state, circles };
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
  deleteCiecle,
} = gameSlice.actions;
export default gameReducer;
