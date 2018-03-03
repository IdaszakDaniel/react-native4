import React, { Component } from "react";
import { StyleSheet, Text, View, Button, SectionList } from "react-native";
import Swipeout from 'react-native-swipeout';

export class ToDoListItem extends Component {

    constructor() {
      super();
    }
  
    swipeoutBtns = [
      {
        text: 'done',
        type: 'default',
        backgroundColor: 'green',
        onPress: () => {
          this.props.markDone(this.props.todo.id);
        }
      },
      {
        text: 'delete',
        type: 'delete',
        onPress: () => {
          this.props.deleteItem(this.props.todo.id);
        }
      }
    ]
  
    render() {
      return (
        <Swipeout right={this.swipeoutBtns} autoClose={true} style={styles.swipeoutContainer}>
          <View style={styles.listItem}>
            <Text style={styles.itemTitle}>{ this.props.todo.title }</Text>
            <Text>{ this.props.todo.description }</Text>
          </View>
        </Swipeout>
      )
    }
}

const styles = StyleSheet.create({
  swipeoutContainer: {
      backgroundColor: '#FFF'
  },
  listItem: {
    padding: 15
  },
  itemTitle: {
    fontWeight: "bold"
  }
});