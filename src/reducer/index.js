import { types, actions } from "../actions"
import { updateFieldChoicesWithNewLocation } from "../utils"

const initialState = {
  previusPlayed: "x",
  nextToPlay: "o",
  score: {
    playerOne: 0,
    playerTwo: 0
  },
  gameIsBlock: false,
  modalVisible: false,
  choices: [
    { id: "0", choice: "" },
    { id: "1", choice: "" },
    { id: "2", choice: "" },
    { id: "3", choice: "" },
    { id: "4", choice: "" },
    { id: "5", choice: "" },
    { id: "6", choice: "" },
    { id: "7", choice: "" },
    { id: "8", choice: "" }
  ],
  moves: 0,
  modalControlText: ""
}

const reducer = (state = initialState, action) => {
  const newState = state
  switch (action.type) {
    case types.UPDATE_PIT_BY_LOCATION:
      newState.location = action.payload
      let newChoices = updateFieldChoicesWithNewLocation(newState)
      return {
        ...newState,
        choices: newChoices,
        nextToPlay: newState.previusPlayed,
        previusPlayed: newState.nextToPlay,
        moves: newState.moves + 1
      }
    case types.SET_NEW_WINNER:
      return {
        ...newState,
        score: {
          playerOne:
            newState.previusPlayed === "x"
              ? newState.score.playerOne + 1
              : newState.score.playerOne,
          playerTwo:
            newState.previusPlayed === "o"
              ? newState.score.playerTwo + 1
              : newState.score.playerTwo
        },
        gameIsBlock: true,
        modalControlText:
          newState.previusPlayed === "o" ? "Player One Win" : "Player Two Win",
        modalVisible: true
      }
    case types.TOGGLE_MODAL_VISIBILITY:
      return {
        ...newState,
        modalVisible: !newState.modalVisible
      }
    case types.SET_GAME_TO_TIE:
      return {
        ...newState,
        modalControlText: "It's a tie",
        modalVisible: true,
        gameIsBlock: true
      }
    default:
      return state
  }
}

export default reducer
