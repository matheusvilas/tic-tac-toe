import React, { Component } from "react"
import { FlatList, View } from "react-native"
import styles from "./style"
import Pit from "../Pit/index"
type Props = {
  choices: Array,
  nextToPlay: String,
  updatePitByLocation: Function
}

export class Field extends React.Component<Props> {
  render() {
    return (
      <FlatList
        style={styles.group}
        data={this.props.choices}
        extraData={this.props}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.list}>
              <Pit
                choice={item.choice}
                locationId={item.id}
                updatePitByLocation={this.props.updatePitByLocation}
              />
            </View>
          )
        }}
      />
    )
  }
}

export default Field
