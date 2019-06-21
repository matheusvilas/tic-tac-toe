import { AppRegistry } from "react-native"
import React, { Component } from "React"
import { name as appName } from "./app.json"
import App from "./src/App"

AppRegistry.registerComponent(appName, () => App)
