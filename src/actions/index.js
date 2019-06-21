export const types = {
  UPDATE_PIT_BY_LOCATION: "UPDATE_PIT_BY_LOCATION",
  SET_NEW_WINNER: "SET_NEW_WINNER"
}

export const actions = {
  updatePitByLocation: payload => ({
    type: types.UPDATE_PIT_BY_LOCATION,
    payload
  }),
  setNewWinner: payload => ({
    type: types.SET_NEW_WINNER
  })
}
