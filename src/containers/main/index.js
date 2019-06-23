// @flow
import React, { useEffect, useState } from "react"
import { Alert } from "react-native"
import CtnScoreBoard from "../ctnScoreBoard"
import CtnField from "../ctnFields"
import CtnModal from "../ctnModal"
import CtnMenu from "../ctnMenu"
import MainComponent from "../../components/MainComponent"
import {
  retrieveGameCount,
  saveGameCount,
  retrieveScore,
  saveGameScore
} from "../../api"
import { connect } from "react-redux"
import { actions } from "../../actions"

type Props = {
  gameCount: number,
  score: Object,
  setGameCount: Function,
  setGameScore: Function
}

export function Main(props: Props) {
  const { gameCount, score, setGameCount, setGameScore } = props

  const [loadedStorage, setLoadedStorage] = useState(false)

  useEffect(() => {
    if (loadedStorage) {
      saveGameCount(gameCount, () => {
        Alert.alert("You just played 5 games.")
      })
    }
  }, [gameCount])

  useEffect(() => {
    if (loadedStorage) {
      saveGameScore(score)
    }
  }, [score])

  useEffect(() => {
    retrieveGameCount().then(count => count && setGameCount(count))
    retrieveScore().then(score => score && setGameScore(score))
  }, [loadedStorage])

  useEffect(() => {
    setLoadedStorage(true)
  })

  return (
    <MainComponent>
      <CtnScoreBoard />
      <CtnField />
      <CtnModal />
      <CtnMenu />
    </MainComponent>
  )
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
