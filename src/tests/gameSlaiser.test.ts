import createStore from "./shared/mockStore";

import {
  startGame,
  endGame,
  increaseLives,
  decreaseLives,
  increaseLevel,
  decreaseLevel,
  increaseSpeed,
  decreaseSpeed,
  decreaseTimer,
  deleteCiecle,
} from "../redux/game/gameSlice";
import { ICircle } from "../types/Game";

let store = createStore();

beforeEach(function () {
  store = createStore();
});

describe("Suite game reducer", function () {
  test("Game reducer / init", function () {
    expect(store.getState().gameSlice.circles.length).toBe(0);
    expect(store.getState().gameSlice.score).toBe(0);
    expect(store.getState().gameSlice.isRunning).toBe(false);
    expect(store.getState().gameSlice.startTime).toBe("hh:mm:ss");
    expect(store.getState().gameSlice.endTime).toBe("hh:mm:ss");
    expect(store.getState().gameSlice.time).toBe(10);
    expect(store.getState().gameSlice.level).toBe(1);
    expect(store.getState().gameSlice.speed).toBe(1);
    expect(store.getState().gameSlice.lives.length).toBe(3);
    expect(store.getState().gameSlice.lives.every((l) => l === true)).toBe(
      true
    );
  });

  test("Game reducer / start game", function () {
    store.dispatch(startGame());
    expect(store.getState().gameSlice.circles.length).toBeGreaterThan(0);
    expect(store.getState().gameSlice.score).toBe(0);
    expect(store.getState().gameSlice.isRunning).toBe(true);
  });

  test("Game reducer / end game", function () {
    store.dispatch(endGame());
    expect(store.getState().gameSlice.isRunning).toBe(false);
    expect(store.getState().gameSlice.level).toBe(1);
    expect(store.getState().gameSlice.isRunning).toBe(false);
    expect(store.getState().gameSlice.lives.length).toBe(3);
    expect(store.getState().gameSlice.lives.every((l) => l === true)).toBe(
      true
    );
  });

  test("Game reducer / decrease lives", function () {
    store.dispatch(decreaseLives());
    expect(store.getState().gameSlice.lives.length).toBe(3);
    expect(
      store.getState().gameSlice.lives.reduce((p, l) => {
        return l === true ? ++p : p;
      }, 0)
    ).toBe(2);
    store.dispatch(decreaseLives());
    expect(store.getState().gameSlice.lives.length).toBe(3);
    expect(
      store.getState().gameSlice.lives.reduce((p, l) => {
        return l === true ? ++p : p;
      }, 0)
    ).toBe(1);
    store.dispatch(decreaseLives());
    expect(store.getState().gameSlice.lives.every((l) => l === false)).toBe(
      true
    );
  });

  test("Game reducer / increase lives", function () {
    store.dispatch(increaseLives());
    expect(store.getState().gameSlice.lives.length).toBe(4);
    expect(store.getState().gameSlice.lives.every((l) => l === true)).toBe(
      true
    );
    store.dispatch(endGame());
    store.dispatch(decreaseLives());
    store.dispatch(increaseLives());
    expect(store.getState().gameSlice.lives.length).toBe(3);
    expect(store.getState().gameSlice.lives.every((l) => l === true)).toBe(
      true
    );
    store.dispatch(decreaseLives());
    store.dispatch(decreaseLives());
    store.dispatch(increaseLives());
    expect(store.getState().gameSlice.lives.length).toBe(3);
    expect(
      store.getState().gameSlice.lives.reduce((p, l) => {
        return l === true ? ++p : p;
      }, 0)
    ).toBe(2);
  });

  test("Game reducer / increase and decrease level", function () {
    expect(store.getState().gameSlice.level).toBe(1);
    store.dispatch(decreaseLevel());
    expect(store.getState().gameSlice.level).toBe(1);
    store.dispatch(increaseLevel());
    expect(store.getState().gameSlice.level).toBe(2);
    store.dispatch(decreaseLevel());
    expect(store.getState().gameSlice.level).toBe(1);
    store.dispatch(increaseLevel());
    store.dispatch(increaseLevel());
    store.dispatch(increaseLevel());
    store.dispatch(increaseLevel());
    expect(store.getState().gameSlice.level).toBe(5);
    store.dispatch(decreaseLevel());
    store.dispatch(increaseLevel());
    store.dispatch(increaseLevel());
    store.dispatch(increaseLevel());
    store.dispatch(increaseLevel());
    store.dispatch(increaseLevel());
    store.dispatch(increaseLevel());
    expect(store.getState().gameSlice.level).toBe(10);
    store.dispatch(increaseLevel());
    expect(store.getState().gameSlice.level).toBe(10);
    store.dispatch(decreaseLevel());
    expect(store.getState().gameSlice.level).toBe(9);
  });

  test("Game reducer / increase and decrease speed", function () {
    expect(store.getState().gameSlice.speed).toBe(1);
    store.dispatch(decreaseSpeed());
    expect(store.getState().gameSlice.speed).toBe(1);
    store.dispatch(increaseSpeed());
    expect(store.getState().gameSlice.speed).toBe(2);
    store.dispatch(decreaseSpeed());
    expect(store.getState().gameSlice.speed).toBe(1);
    store.dispatch(increaseSpeed());
    store.dispatch(increaseSpeed());
    store.dispatch(increaseSpeed());
    store.dispatch(decreaseSpeed());
    store.dispatch(increaseSpeed());
    store.dispatch(increaseSpeed());
    expect(store.getState().gameSlice.speed).toBe(5);
    store.dispatch(increaseSpeed());
    expect(store.getState().gameSlice.speed).toBe(5);
    store.dispatch(decreaseSpeed());
    expect(store.getState().gameSlice.speed).toBe(4);
  });

  test("Game reducer / decrease timer", function () {
    expect(store.getState().gameSlice.time).toBe(10);
    store.dispatch(decreaseTimer());
    expect(store.getState().gameSlice.time).toBe(9);
    store.dispatch(decreaseTimer());
    store.dispatch(decreaseTimer());
    store.dispatch(decreaseTimer());
    store.dispatch(decreaseTimer());
    expect(store.getState().gameSlice.time).toBe(5);
    store.dispatch(decreaseTimer());
    store.dispatch(decreaseTimer());
    store.dispatch(decreaseTimer());
    store.dispatch(decreaseTimer());
    store.dispatch(decreaseTimer());
    expect(store.getState().gameSlice.time).toBe(0);
    store.dispatch(decreaseTimer());
    expect(store.getState().gameSlice.time).toBe(0);
  });

  test("Game reducer / delete ciecle", function () {
    store.dispatch(startGame());
    const noCircles: number = store.getState().gameSlice.level + 10;
    expect(store.getState().gameSlice.circles.length).toBe(noCircles);
    const circle: ICircle = store.getState().gameSlice.circles[0];
    expect(
      store.getState().gameSlice.circles.findIndex((c) => c.id === circle.id)
    ).toBeGreaterThan(-1);
    store.dispatch(deleteCiecle(circle));
    expect(store.getState().gameSlice.circles.length).toBe(noCircles - 1);
    expect(
      store.getState().gameSlice.circles.findIndex((c) => c.id === circle.id)
    ).toBe(-1);
  });
});
