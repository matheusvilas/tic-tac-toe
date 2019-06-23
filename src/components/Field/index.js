// @flow
import React from "react"
import { FlatList, View, Text } from "react-native"
import styles from "./style"
import Pit from "../Pit/index"

type Props = {
  choices: Object,
  nextToPlay: string,
  updatePitByLocation: Function,
  gameCount: number
}

export function Field(props: Props) {
  const { choices, updatePitByLocation, gameCount } = props
  return (
    <View style={styles.group}>
      <Text style={styles.gameCount}> Game count: {gameCount}</Text>
      <FlatList
        data={choices}
        extraData={props}
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

export default Field
