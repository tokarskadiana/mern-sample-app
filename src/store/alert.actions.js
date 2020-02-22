export default function mapToAlertActions(dispatch) {
  return {
    showAlert: (variant, message) =>
      dispatch({ type: "SHOW_ALERT", variant, message }),
    hideAlert: () => dispatch({ type: "HIDE_ALERT" })
  };
}
