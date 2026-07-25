export const initialFormState = {
  values: {
    name: "",
    email: "",
    message: "",
  },
  status: "idle",
};

export function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },
      };
    case "SEND_START":
      return { ...state, status: "sending" };
    case "SEND_SUCCESS":
      return {
        ...state,
        status: "success",
        values: { name: "", email: "", message: "" },
      };
    case "SEND_ERROR":
      return { ...state, status: "error" };
    default:
      return state;
  }
}
