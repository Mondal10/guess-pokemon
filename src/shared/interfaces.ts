export interface IFlavorText {
  flavor_text: string;
  language: {
    name: string;
  };
}

export interface IPokemonResponse {
  flavor_text_entries: IFlavorText[];
  id: number;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  habitat: {
    name: string;
  };
  shape: {
    name: string;
  };
}

export interface IPokemonData {
  id: null | number;
  name: null | string;
  isMythical: null | boolean;
  isLegendary: null | boolean;
  flavorTextEntries: null | IFlavorText[];
  habitat: string;
  shape: string;
}
