import { configureStore } from "@reduxjs/toolkit";

import gameSlice from "../../redux/game/gameSlice";

export default function createStore() {
  const store = configureStore({
    reducer: {
      gameSlice,
    },
  });

  return store;
}
