import { IFlavorText } from "@/shared/interfaces";

type TInitialState = {
  id: null | number;
  name: null | string;
  isMythical: null | boolean;
  isLegendary: null | boolean;
  flavorTextEntries: null | IFlavorText[];
};

export const initialState: TInitialState = {
  id: null,
  name: null,
  isMythical: null,
  isLegendary: null,
  flavorTextEntries: null,
};
