export const types = {
  UPDATE_PIT_BY_LOCATION: "UPDATE_PIT_BY_LOCATION",
  SET_NEW_WINNER: "SET_NEW_WINNER",
  TOGGLE_MODAL_VISIBILITY: "TOGGLE_MODAL_VISIBILITY",
  SET_GAME_TO_TIE: "SET_GAME_TO_TIE",
  START_NEW_GAME: "START_NEW_GAME",
  SET_GAME_COUNT: "SET_GAME_COUNT",
  SET_GAME_SCORE: "SET_GAME_SCORE"
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
  }),
  startNewGame: payload => ({
    type: types.START_NEW_GAME,
    payload
  }),
  setGameCount: payload => ({
    type: types.SET_GAME_COUNT,
    payload
  }),
  setGameScore: payload => ({
    type: types.SET_GAME_SCORE,
    payload
  })
}
