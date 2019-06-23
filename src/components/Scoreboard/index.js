// @flow
import React from "react"
import { Text, View } from "react-native"
import styles from "./style"

type Props = {
  playerOne: number,
  playerTwo: number
}

export function ScoreBoard(props: Props) {
  const { playerOne, playerTwo } = props
  return (
    <View style={styles.container}>
      <Text style={styles.scorePoints}>
        {props.playerOne} x {props.playerTwo}
      </Text>
    </View>
  )
}

export default ScoreBoard
