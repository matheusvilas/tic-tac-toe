import React, { Component } from "react"
import { View, Text } from "react-native"
import Field from "../../components/Field"
import { connect } from "react-redux"
import { actions } from "../../actions"
import { verifyIfPitIsEmpty, verifyIfHasWinner } from "../../utils"

export class CtnField extends Component {
  updatePitByLocation = location => {
    const { updatePitByLocation, choices, setNewWinner } = this.props

    if (!verifyIfPitIsEmpty(choices[location])) return false

    const hasWinner = verifyIfHasWinner({ ...this.props, location })

    if (hasWinner) {
      updatePitByLocation(location)
      setNewWinner()
    } else {
      updatePitByLocation(location)
    }
  }

  render() {
    console.log("O Estado Atual", this.props)
    const { choices, nextToPlay } = this.props
    return (
      <Field
        choices={this.props.choices}
        nextToPlay={nextToPlay}
        updatePitByLocation={this.updatePitByLocation}
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
  setNewWinner: () => dispatch(actions.setNewWinner())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CtnField)
