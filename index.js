import { AppRegistry } from "react-native"
import React, { Component } from "React"
import { name as appName } from "./app.json"
import App from "./src/App"
import { YellowBox } from "react-native"
YellowBox.ignoreWarnings(["Remote debugger"])

AppRegistry.registerComponent(appName, () => App)
