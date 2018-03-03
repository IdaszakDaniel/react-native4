import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AppNavigator } from "./AppNavigator";
import { Provider } from "react-redux";
import { store } from "./config/store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default  App ;
