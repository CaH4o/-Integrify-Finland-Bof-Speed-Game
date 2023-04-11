import createStore from "./shared/mockStore";

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

  test("Game reducer / init", function () {});
});
