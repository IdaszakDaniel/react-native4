import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SectionList,
  TouchableHighlight
} from "react-native";
import Swipeout from "react-native-swipeout";

export class ToDoListItem extends Component {
  swipeoutBtnsDone = [
    {
      text: "undone",
      type: "default",
      backgroundColor: "green",
      onPress: () => {
        this.props.markDone(this.props.todo.id, false);
      }
    },
    {
      text: "delete",
      type: "delete",
      onPress: () => {
        this.props.deleteItem(this.props.todo.id);
      }
    }
  ];
  swipeoutBtns = [
    {
      text: "done",
      type: "default",
      backgroundColor: "#2ECC71",
      onPress: () => {
        this.props.markDone(this.props.todo.id);
      }
    },
    {
      text: "delete",
      type: "delete",
      backgroundColor: "#E74C3C",
      onPress: () => {
        this.props.deleteItem(this.props.todo.id);
      }
    }
  ];

  render() {
    const { todo } = this.props;
    return (
      <Swipeout
        right={todo.done ? this.swipeoutBtnsDone : this.swipeoutBtns}
        autoClose={true}
        style={styles.swipeoutContainer}
      >
        <TouchableHighlight onPress={() => this.props.itemClick(todo.id)}>
          <View style={styles.listItem}>
            <Text style={todo.done ? styles.itemTitleDone : styles.itemTitle}>
              {todo.title}
            </Text>
            <Text>{todo.description}</Text>
          </View>
        </TouchableHighlight>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  swipeoutContainer: {
    backgroundColor: "#FFF"
  },
  listItem: {
    padding: 15,
    borderTopColor: "#F3F3F3",
    borderTopWidth: 1
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 18
  },
  itemTitleDone: {
    fontWeight: "bold",
    fontSize: 18,
    textDecorationLine: "line-through"
  }
});
