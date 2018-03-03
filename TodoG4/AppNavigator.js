import React from "react";
import { StackNavigator } from "react-navigation";
import TodoComponent from "./components/TodoComponent";
import DetailsComponent from "./components/TodoDetailsComponent";

export default StackNavigator(
  {
    Home: {
      screen: TodoComponent
    },
    Details: {
      screen: DetailsComponent
    }
  },
  {
    initialRouteName: "Home"
  }
);
