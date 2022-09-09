export interface IFlavorText {
  flavor_text: string;
  language: {
    name: string;
  };
}

export interface IPokemonResponse {
  flavor_text_entries: IFlavorText[];
  id: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
}
