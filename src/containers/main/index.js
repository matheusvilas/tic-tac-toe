import React, { Component } from "react"
import { Text, View, SafeAreaView } from "react-native"
import ScoreBoard from "../../components/Scoreboard/index"
import Field from "../../components/Field/index"

export class Main extends Component {
  state = {
    score: {
      playerOne: 0,
      playerTwo: 0
    }
  }
  render() {
    return (
      <SafeAreaView>
        <ScoreBoard
          playerOne={this.state.score.playerOne}
          playerTwo={this.state.score.playerTwo}
        />
        <Field />
      </SafeAreaView>
    )
  }
}

export default Main
