import React, { Component } from "react"
import { Text, View } from "react-native"
import styles from "./style"

type Props = {
  playerOne: number,
  playerTwo: number
}

export class ScoreBoard extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.scorePoints}>
          {this.props.playerOne} x {this.props.playerTwo}
        </Text>
      </View>
    )
  }
}

export default ScoreBoard
