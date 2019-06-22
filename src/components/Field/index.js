import React, { Component } from "react"
import { FlatList, View, Text } from "react-native"
import styles from "./style"
import Pit from "../Pit/index"
type Props = {
  choices: Array,
  nextToPlay: String,
  updatePitByLocation: Function
}

export class Field extends React.Component<Props> {
  render() {
    const { choices, updatePitByLocation, gameCount } = this.props
    return (
      <View style={styles.group}>
        <Text style={styles.gameCount}> Game count: {gameCount}</Text>
        <FlatList
          data={choices}
          extraData={this.props}
          numColumns={3}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View style={styles.square}>
                <Pit
                  choice={item.choice}
                  locationId={item.id}
                  updatePitByLocation={updatePitByLocation}
                />
              </View>
            )
          }}
        />
      </View>
    )
  }
}

export default Field
