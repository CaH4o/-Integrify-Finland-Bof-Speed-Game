import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createCurcles } from "../../app/functions";

import { ICircle, Circles, GameState } from "../../types/Game";

const initialState: GameState = {
  circles: [],
  score: 0,
  isRunning: false,
  startTime: "hh:mm:ss",
  endTime: "hh:mm:ss",
  time: 10,
  level: 1,
  speed: 1,
  lives: [true, true, true],
};

const gameSlice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    startGame: function (state: GameState) {
      const startTime:string = new Date().toDateString();
      const circles: Circles = createCurcles(state.level);
      const score: number = 0;
      const isRunning: boolean = true;
      return { ...state, circles, isRunning, score, startTime};
    },
    endGame: function (state: GameState) {
      const endTime:string = new Date().toDateString();
      const isRunning: boolean = false;
      const lives: boolean[] = [true, true, true];
      const level: number = 1;
      return { ...state, isRunning, endTime, lives, level };
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
      if (state.level === 20) return;
      const level: number = state.level + 1;
      return { ...state, level };
    },
    decreaseLevel: function (state: GameState) {
      if (state.level === 1) return;
      const level: number = state.level - 1;
      return { ...state, level };
    },
    decreaseSpeed: function (state: GameState) {
      if (state.speed === 1) return;
      const speed: number = state.speed - 1;
      return { ...state, speed };
    },
    increaseSpeed: function (state: GameState) {
      if (state.speed === 10) return;
      const speed: number = state.speed + 1;
      return { ...state, speed };
    },
    decreaseTimer: function (state: GameState) {
      if (state.time === 10) return;
      const time = state.time - 1;
      return { ...state, time };
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
  decreaseLevel,
  increaseSpeed,
  decreaseSpeed,
  decreaseTimer,
  deleteCiecle,
} = gameSlice.actions;
export default gameReducer;
