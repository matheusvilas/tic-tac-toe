// @flow
import React from "react"
import { Alert, View, Text } from "react-native"
import Field from "../../components/Field"
import { connect } from "react-redux"
import { actions } from "../../actions"
import {
  verifyIfPitIsEmpty,
  verifyIfHasWinner,
  verifyIfIsTie
} from "../../utils"

type Props = {
  updatePitByLocation: Function,
  choices: Object,
  setNewWinner: Function,
  gameIsBlock: boolean,
  moves: number,
  setGameToTie: Function,
  gameCount: number,
  nextToPlay: string
}

export function CtnField(props: Props) {
  function updatePitByLocation(location) {
    const {
      updatePitByLocation,
      choices,
      setNewWinner,
      gameIsBlock,
      moves,
      setGameToTie
    } = props

    if (!verifyIfPitIsEmpty(choices[location]) || gameIsBlock) return false

    if (verifyIfIsTie(moves)) setGameToTie()

    const hasWinner = verifyIfHasWinner({ ...props, location })

    if (hasWinner) {
      updatePitByLocation(location)
      setNewWinner()
    } else {
      updatePitByLocation(location)
    }
  }

  const { choices, nextToPlay, gameCount } = props
  return (
    <Field
      choices={props.choices}
      nextToPlay={nextToPlay}
      updatePitByLocation={updatePitByLocation}
      gameCount={gameCount}
    />
  )
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
