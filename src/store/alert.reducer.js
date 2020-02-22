const alertState = {
  show: false,
  message: "",
  variant: ""
};

export default function alertReducer(state = alertState, action) {
  switch (action.type) {
    case "SHOW_ALERT":
      return {
        show: true,
        message: action.message,
        variant: action.variant
      };
    case "HIDE_ALERT":
      return {
        show: false,
        message: "",
        variant: ""
      };
    default:
      return state;
  }
}
