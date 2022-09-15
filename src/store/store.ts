import { configureStore } from "@reduxjs/toolkit";
import { gameSliceReducer } from "./features/game/gameSlice";
import { pokemonSliceReducer } from "./features/pokemon/pokemonSlice";

const store = configureStore({
  reducer: {
    game: gameSliceReducer,
    pokemon: pokemonSliceReducer,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
