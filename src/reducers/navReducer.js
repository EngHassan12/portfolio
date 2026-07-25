export const initialNavState = {
  active: "hero",
  menuOpen: false,
};

export function navReducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE":
      return { ...state, active: action.payload };
    case "TOGGLE_MENU":
      return { ...state, menuOpen: !state.menuOpen };
    case "CLOSE_MENU":
      return { ...state, menuOpen: false };
    default:
      return state;
  }
}