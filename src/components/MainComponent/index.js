// @flow
import * as React from "react"
import { SafeAreaView } from "react-native"
import styles from "./style"

type Props = {
  children: React.Node
}

export default function Main({ children }: Props) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}
