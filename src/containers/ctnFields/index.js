import React, { Component } from "react"
import { Alert, View, Text } from "react-native"
import Field from "../../components/Field"
import { connect } from "react-redux"
import { actions } from "../../actions"
import {
  verifyIfPitIsEmpty,
  verifyIfHasWinner,
  verifyIfIsTie
} from "../../utils"

export class CtnField extends Component {
  updatePitByLocation = location => {
    const {
      updatePitByLocation,
      choices,
      setNewWinner,
      gameIsBlock,
      moves,
      setGameToTie
    } = this.props

    if (!verifyIfPitIsEmpty(choices[location]) || gameIsBlock) return false

    if (verifyIfIsTie(moves)) setGameToTie()

    const hasWinner = verifyIfHasWinner({ ...this.props, location })

    if (hasWinner) {
      updatePitByLocation(location)
      setNewWinner()
    } else {
      updatePitByLocation(location)
    }
  }

  render() {
    const { choices, nextToPlay, gameCount } = this.props
    return (
      <Field
        choices={this.props.choices}
        nextToPlay={nextToPlay}
        updatePitByLocation={this.updatePitByLocation}
        gameCount={gameCount}
      />
    )
  }
}

const mapStateToProps = reducer => ({
  ...reducer
})

const mapDispatchToProps = dispatch => ({
  updatePitByLocation: payload =>
    dispatch(actions.updatePitByLocation(payload)),
  setNewWinner: () => dispatch(actions.setNewWinner()),
  setGameToTie: () => dispatch(actions.setGameToTie())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CtnField)
