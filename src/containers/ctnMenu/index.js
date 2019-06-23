// @flow
import React from "react"
import Menu from "../../components/Menu"
import { Alert } from "react-native"
import { connect } from "react-redux"
import { actions } from "../../actions"

type Props = {
  restartTheGame: Function,
  moves: number
}

export function CtnMenu(props: Props) {
  function getButtonTextByMoves(moves) {
    return moves > 0 ? "Restart Game" : "You can play"
  }

  function restartTheGame() {
    const { restartTheGame } = props

    Alert.alert(
      "Do you want to restart the game?",
      "",
      [
        {
          text: "Ok",
          onPress: () => {
            restartTheGame()
          }
        },
        { text: "cancel", style: "cancel" }
      ],
      { cancelable: false }
    )
  }

  const { moves } = props
  return (
    <Menu
      buttonText={getButtonTextByMoves(moves)}
      buttonPress={restartTheGame}
      moves={moves}
    />
  )
}

const mapStateToProps = reducer => ({
  ...reducer
})

const mapDispatchToProps = dispatch => ({
  restartTheGame: () => {
    dispatch(actions.startNewGame())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CtnMenu)
