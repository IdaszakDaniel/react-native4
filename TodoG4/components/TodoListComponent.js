import React, { Component } from "react";
import { StyleSheet, Text, View, Button, SectionList, Alert } from "react-native";
import { connect } from "react-redux";
import { getTodosByLabelName } from "../reducers/todo";
import { ToDoListItem } from './TodoListItemComponent';
import { DELETE_TODO } from '../actions/types';


const ToDoListSection = ({ section }) => (
  <View style={styles.listSection}>
    <Text>{section.title}</Text>
  </View>
);

class TodoListComponent extends Component {

  constructor() {
    super();
  }

  _onItemClick = (id) => {
    this.props.navigation.navigate('Details');
  }

  _onDeleteItem = (id) => {
    Alert.alert('Confirm deletion', '', [
      { text: 'cancel', onPress: () => {}, style: 'cancel' },
      { text: 'delete', onPress: () => this.props.onDeleteItem(id) }
    ]);
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.props.data}
          renderItem={({item}) => <ToDoListItem todo={item} markDone={this._onMarkDone} itemClick={this._onItemClick} deleteItem={this._onDeleteItem} />}
          renderSectionHeader={ToDoListSection}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  sectionList: {
    backgroundColor: "red"
  },
  listSection: {
    padding: 15,
    backgroundColor: "#ECECEC"
  }
});

const mapStateToProps = (state, props) => {
  const todos = getTodosByLabelName(state);
  const data = Object.keys(todos).map(key => ({
    data: todos[key],
    title: key
  }));
  return {
    data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteItem: (id) => {
      dispatch({
        type: DELETE_TODO,
        payload: id
      });
    }
  }
}

const TodoListComponentContainer = connect(mapStateToProps, mapDispatchToProps)(
  TodoListComponent
);
export { TodoListComponentContainer as TodoListComponent };
