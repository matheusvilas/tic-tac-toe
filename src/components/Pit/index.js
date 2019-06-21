import React, { Component } from "react"
import { TouchableOpacity, Text } from "react-native"
import styles from "./style"

type Props = {
  choice: String,
  updatePitByLocation: Function,
  locationId: String
}

export class Pit extends React.Component<Props> {
  render() {
    const { updatePitByLocation, locationId, choice } = this.props
    return (
      <TouchableOpacity
        style={styles.group}
        onPress={() => {
          updatePitByLocation(locationId)
        }}
      >
        <Text style={styles.text}>{choice}</Text>
      </TouchableOpacity>
    )
  }
}

export default Pit
