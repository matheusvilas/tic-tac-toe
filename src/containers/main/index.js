import React, { Component } from "react"
import { Text, View, SafeAreaView } from "react-native"
import CtnScoreBoard from "../ctnScoreBoard"
import CtnField from "../ctnFields"
import CtnModal from "../ctnModal"

export class Main extends Component {
  render() {
    return (
      <SafeAreaView>
        <CtnScoreBoard />
        <CtnField />
        <CtnModal />
      </SafeAreaView>
    )
  }
}

export default Main
