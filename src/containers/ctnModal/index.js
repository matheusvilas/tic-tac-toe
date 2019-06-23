// @flow
import React from "react"
import { ModalControll } from "../../components/Modal"
import { connect } from "react-redux"
import { actions } from "../../actions"

type Props = {
  toggleModalVisibility: Function,
  modalVisible: string,
  modalControlText: boolean
}

export function CtnModal(props: Props) {
  function toggleModalVisibility() {
    const { toggleModalVisibility } = props
    toggleModalVisibility()
  }

  const { modalVisible, modalControlText } = props

  return (
    <ModalControll
      modalVisible={modalVisible}
      toggleModalVisibility={toggleModalVisibility}
      modalControlText={modalControlText}
    />
  )
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
