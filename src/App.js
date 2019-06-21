import React, { Component } from "react"
import Main from "./containers/main"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reducer from "./reducer"

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}
