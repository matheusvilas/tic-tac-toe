// @flow
import React from "react"
import ScoreBoard from "../../components/Scoreboard"
import { connect } from "react-redux"
import actions from "../../actions"

type Props = {
  score: Object
}

export function CtnScoreBoard(props: Props) {
  const { score } = props
  return <ScoreBoard playerOne={score.playerOne} playerTwo={score.playerTwo} />
}

const mapStateToProps = reducer => ({
  ...reducer
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CtnScoreBoard)
