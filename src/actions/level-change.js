// select level is an action creator, it needs to return an action
// an object with a type property and then something more about the action as payload.
export function ChangeLevel(level) {
  return {
    type: 'SELECTED_LEVEL',
    payload: level,
  }
}