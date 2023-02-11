import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createCurcles } from "../../app/functions";

import { ICircle, Circles, GameState } from "../../types/Game";

const initialState: GameState = {
  circles: [],
  score: 0,
  isRunning: false,
  startTime: "hh:mm:ss",
  endTime: "hh:mm:ss",
  level: 1,
  speed: 1,
  lives: [true, true, true, false, false],
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    startGame: function (state: GameState) {
      const startTime:string = new Date().toDateString();
      const circles: Circles = createCurcles(state.level);
      const score: number = 0;
      const level: number = 1;
      const isRunning: boolean = true;
      return { ...state, circles, isRunning, score, level, startTime};
    },
    endGame: function (state: GameState) {
      const endTime:string = new Date().toDateString();
      const isRunning: boolean = false;
      return { ...state, isRunning, endTime };
    },
    decreaseLives: function (state: GameState) {
      const hasLive: boolean = state.lives.some(function (b: boolean) {
        return b;
      });

      if (hasLive) {
        const lives: boolean[] = [...state.lives];

        for (let i = lives.length - 1; i > -1; --i) {
          if (lives[i]) {
            lives[i] = false;
            break;
          }
        }

        return { ...state, lives };
      }
    },
    increaseLevel: function (state: GameState) {
      const level: number = state.level + 1;
      return { ...state, level };
    },
    decreaseTimer: function (state: GameState) {
      return state;
    },
    deleteCiecle(state: GameState, action: PayloadAction<ICircle>) {
      let score: number = state.score;
      let level: number = state.level;
      let circles: Circles = state.circles.filter(function (circle: ICircle) {
        return circle.id !== action.payload.id;
      });

      if (circles.length) {
        score += 1;
        return { ...state, circles, score };
      } else {
        score += 10;
        level += 1;
        circles = createCurcles(level);
        return { ...state, circles, score, level };
      }
    },
  },
});

const gameReducer = gameSlice.reducer;
export const {
  startGame,
  endGame,
  decreaseLives,
  increaseLevel,
  decreaseTimer,
  deleteCiecle,
} = gameSlice.actions;
export default gameReducer;
