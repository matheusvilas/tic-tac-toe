// @flow
import React from "react"
import { TouchableOpacity, Text } from "react-native"
import styles from "./style"

type Props = {
  choice: String,
  updatePitByLocation: Function,
  locationId: String
}

export function Pit(props: Props) {
  const { updatePitByLocation, locationId, choice } = props
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

export default Pit
