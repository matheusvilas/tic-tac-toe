import React, { Component } from "react"
import ScoreBoard from "../../components/Scoreboard"
import { connect } from "react-redux"
import actions from "../../actions"

export class CtnScoreBoard extends Component {
  render() {
    const { score } = this.props
    return (
      <ScoreBoard playerOne={score.playerOne} playerTwo={score.playerTwo} />
    )
  }
}

const mapStateToProps = reducer => ({
  ...reducer
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CtnScoreBoard)
