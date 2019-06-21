import React, { Component } from "react"
import { Text, View, SafeAreaView } from "react-native"
import CtnScoreBoard from "../ctnScoreBoard"
import CtnField from "../ctnFields"

export class Main extends Component {
  render() {
    return (
      <SafeAreaView>
        <CtnScoreBoard />
        <CtnField />
      </SafeAreaView>
    )
  }
}

export default Main
