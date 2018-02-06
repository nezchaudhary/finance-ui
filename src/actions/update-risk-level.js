export function updateRiskLevel(level) {
  return {
    type: 'SELECTED_LEVEL',
    payload: level,
  }
}