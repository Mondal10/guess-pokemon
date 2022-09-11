import { configureStore } from "@reduxjs/toolkit";
import { gameSliceReducer } from "./features/game/gameSlice";

const store = configureStore({
  reducer: {
    game: gameSliceReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
