import { useReducer } from "react";

enum actionTypes {
  toggle = "TOGGLE",
  on = "ON",
  off = "OFF",
}

export function toggleReducer(
  state: { on: boolean },
  action: { type: actionTypes }
) {
  switch (action.type) {
    case actionTypes.toggle: {
      return { on: !state.on };
    }
    case actionTypes.on: {
      return { on: true };
    }
    case actionTypes.off: {
      return { on: false };
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`);
    }
  }
}

export function useToggle(
  { reducer = toggleReducer } = {},
  defaultState = false
) {
  const [{ on }, dispatch] = useReducer(reducer, { on: defaultState });

  const toggle = () => dispatch({ type: actionTypes.toggle });
  const setOn = () => dispatch({ type: actionTypes.on });
  const setOff = () => dispatch({ type: actionTypes.off });

  return { on, toggle, setOn, setOff };
}
