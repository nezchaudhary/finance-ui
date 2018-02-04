export function ChangeLevel(level) {
  // select level is an action creator, it needs to return an action
  // an object with a type property and then something more about the action as payload.
  return {
    type: 'SELECTED_LEVEL',
    payload: level,
  }
}