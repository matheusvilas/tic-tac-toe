import React, { Component } from "react"
import { ModalControll } from "../../components/Modal"
import { connect } from "react-redux"
import { actions } from "../../actions"

export class CtnModal extends Component {
  toggleModalVisibility = () => {
    const { toggleModalVisibility } = this.props
    toggleModalVisibility()
  }

  render() {
    const { modalVisible, modalControlText } = this.props

    return (
      <ModalControll
        modalVisible={modalVisible}
        toggleModalVisibility={this.toggleModalVisibility}
        modalControlText={modalControlText}
      />
    )
  }
}

const mapStateToProps = reducer => ({
  ...reducer
})

const mapDispatchToProps = dispatch => ({
  toggleModalVisibility: () => dispatch(actions.toggleModalVisibility())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CtnModal)
