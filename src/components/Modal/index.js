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
            <Text style={styles.modalText}>{modalControlText}</Text>
            <TouchableHighlight
              onPress={() => {
                toggleModalVisibility()
              }}
              style={styles.modalButton}
            >
              <Text style={styles.buttonText}>OK!</Text>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </Modal>
    )
  }
}
