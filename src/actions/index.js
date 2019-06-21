export const types = {
  UPDATE_PIT_BY_LOCATION: "UPDATE_PIT_BY_LOCATION",
  SET_NEW_WINNER: "SET_NEW_WINNER",
  TOGGLE_MODAL_VISIBILITY: "TOGGLE_MODAL_VISIBILITY",
  SET_GAME_TO_TIE: "SET_GAME_TO_TIE"
}

export const actions = {
  updatePitByLocation: payload => ({
    type: types.UPDATE_PIT_BY_LOCATION,
    payload
  }),
  setNewWinner: payload => ({
    type: types.SET_NEW_WINNER,
    payload
  }),
  toggleModalVisibility: payload => ({
    type: types.TOGGLE_MODAL_VISIBILITY,
    payload
  }),
  setGameToTie: payload => ({
    type: types.SET_GAME_TO_TIE,
    payload
  })
}
