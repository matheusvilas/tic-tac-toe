import React, { Component } from "react"
import styles from "./style"
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  SafeAreaView
} from "react-native"

export class ModalControll extends Component {
  render() {
    const { toggleModalVisibility, modalVisible, modalControlText } = this.props
    return (
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <SafeAreaView style={styles.modalGroup}>
          <View style={styles.modalContent}>
            <Text>{modalControlText}</Text>
            <TouchableHighlight
              onPress={() => {
                toggleModalVisibility()
              }}
            >
              <Text>Close Modal</Text>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </Modal>
    )
  }
}
