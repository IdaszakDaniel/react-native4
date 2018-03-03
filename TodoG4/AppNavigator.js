import React from "react";
import { StackNavigator } from "react-navigation";
import { TodoListComponent } from "./components/TodoListComponent";
import DetailsComponent from "./components/TodoDetailsComponent";

export default StackNavigator(
  {
    Home: {
      screen: TodoListComponent
    },
    Details: {
      screen: DetailsComponent
    }
  },
  {
    initialRouteName: "Home"
  }
);
