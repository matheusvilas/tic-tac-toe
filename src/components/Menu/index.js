import React, { Component } from "react"
import { TouchableOpacity, Text, View } from "react-native"
import styles from "./style"
export class Menu extends Component {
  render() {
    const { buttonText, buttonPress, moves } = this.props
    return (
      <View style={styles.group}>
        <TouchableOpacity
          style={styles.button}
          onPress={buttonPress}
          disabled={moves === 0}
        >
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Menu
