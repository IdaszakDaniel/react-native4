import React, { Component } from "react";
import { StyleSheet, Text, View, Button, SectionList } from "react-native";
import Swipeout from "react-native-swipeout";

export class ToDoListItem extends Component {
  swipeoutBtnsDone = [
    {
      text: "undone",
      type: "default",
      backgroundColor: "green",
      onPress: () => {
        this.props.markDone(this.props.todo.id,false);
      }
    },
    {
      text: "delete",
      type: "delete",
      onPress: () => {
        this.props.deleteItem(this.props.todo.id);
      }
    }
  ]
  swipeoutBtns = [
    {
      text: "done",
      type: "default",
      backgroundColor: "green",
      onPress: () => {
        this.props.markDone(this.props.todo.id);
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

  render() {
    const { todo } = this.props;
    return (
      <Swipeout
        right={todo.done ? this.swipeoutBtnsDone : this.swipeoutBtns}
        autoClose={true}
        style={styles.swipeoutContainer}
      >
        <View style={styles.listItem}>
          <Text style={todo.done? styles.itemTitleDone : styles.itemTitle}>{todo.title}</Text>
          <Text>{todo.description}</Text>
        </View>
      </Swipeout>
    );
  }
}

const styles = StyleSheet.create({
  swipeoutContainer: {
    backgroundColor: "#FFF"
  },
  listItem: {
    padding: 15
  },
  itemTitle: {
    fontWeight: "bold",
    width:null,
  },
  itemTitleDone:{
    fontWeight: "bold",
    width:null,
    color: 'red',
    textDecorationLine: 'line-through'


  }
});
