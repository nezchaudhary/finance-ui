// this function return the current value for the level that is selected for risk tolerance
export default function (state = null, action) {
  switch (action.type) {
    case 'SELECTED_LEVEL':
    console.log('action is', action);
      return action.payload;
    default:
      return 0;
  }
}