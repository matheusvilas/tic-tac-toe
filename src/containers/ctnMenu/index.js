import React, { Component } from "react"
import Menu from "../../components/Menu"
import { Alert } from "react-native"
import { connect } from "react-redux"
import { actions } from "../../actions"

export class CtnMenu extends Component {
  getButtonTextByMoves = moves => {
    return moves > 0 ? "Restart Game" : "You can play"
  }

  restartTheGame = () => {
    const { restartTheGame } = this.props

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

  render() {
    console.log(this.props)
    const { moves } = this.props
    return (
      <Menu
        buttonText={this.getButtonTextByMoves(moves)}
        buttonPress={this.restartTheGame}
        moves={moves}
      />
    )
  }
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
