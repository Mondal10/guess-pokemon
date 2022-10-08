import { POKEMON_DATA_URL } from "@/shared/constants";
import { IPokemonResponse } from "@/shared/interfaces";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (pokemonID: number | null) => {
    if (pokemonID === null) return;
    const resp = await fetch(`${POKEMON_DATA_URL}${pokemonID}`).then((res) =>
      res.json()
    );
    return resp;
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    resetPokemonState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPokemon.fulfilled,
      (state, action: PayloadAction<IPokemonResponse>) => {
        state.loading = false;
        state.pokemonData = action.payload;
      }
    );
    builder.addCase(fetchPokemon.rejected, (state, action) => {
      state.loading = false;
      state.pokemonData = null;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const pokemonSliceReducer = pokemonSlice.reducer;
export const pokemonSliceActions = pokemonSlice.actions;
