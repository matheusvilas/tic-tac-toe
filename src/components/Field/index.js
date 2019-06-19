import React, { Component } from "react"
import { FlatList } from "react-native"
import styles from "./style"
import Pit from "../Pit/index"
type Props = {}

export class Field extends React.Component<Props> {
  state = {
    data: [
      { id: "00", name: "Relâmpago McQueen" },
      { id: "01", name: "Agente Tom Mate" },
      { id: "02", name: "Doc Hudson" },
      { id: "03", name: "Cruz Ramirez" }
    ]
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        numColumns={3}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return <Pit> {item.name}</Pit>
        }}
      />
    )
  }
}

export default Field
