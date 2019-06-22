import React, { Component } from "react"
import CtnScoreBoard from "../ctnScoreBoard"
import CtnField from "../ctnFields"
import CtnModal from "../ctnModal"
import CtnMenu from "../ctnMenu"
import { SafeAreaView, Alert } from "react-native"
import styles from "../../components/MainComponent/style"
import {
  retrieveGameCount,
  saveGameCount,
  retrieveScore,
  saveGameScore
} from "../../api"
import { connect } from "react-redux"
import { actions } from "../../actions"

export class Main extends Component {
  componentDidUpdate() {
    const { gameCount, score } = this.props

    saveGameCount(gameCount)
    saveGameScore(score)
  }

  componentDidMount() {
    const { setGameCount, setGameScore, gameCount } = this.props
    retrieveGameCount().then(count => {
      setGameCount(count)
    })

    retrieveScore().then(score => {
      if (score) setGameScore(score)
    })

    if (gameCount === 6) Alert.alert("You just played 5 games.")
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CtnScoreBoard />
        <CtnField />
        <CtnModal />
        <CtnMenu />
      </SafeAreaView>
    )
  }
}

const mapStateToProps = reducer => ({
  ...reducer
})

const mapDispatchToProps = dispatch => ({
  setGameCount: payload => dispatch(actions.setGameCount(payload)),
  setGameScore: payload => dispatch(actions.setGameScore(payload))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
