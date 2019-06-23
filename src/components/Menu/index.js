// @flow
import React from "react"
import { TouchableOpacity, Text, View } from "react-native"
import styles from "./style"

type Props = {
  buttonText: string,
  buttonPress: Function,
  moves: number
}

export default function Menu(props: Props) {
  const { buttonText, buttonPress, moves } = props
  return (
    <View style={styles.group}>
      <TouchableOpacity
        style={styles.button}
        onPress={buttonPress}
        disabled={moves === 0}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}
