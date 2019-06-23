import React from "react";
import { SafeAreaView } from "react-native";
import styles from "./style";

export function Main({ children }) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

export default Main;
