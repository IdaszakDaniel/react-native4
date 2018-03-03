import React, { Component } from "react";
import { StyleSheet, Text, View, Button, SectionList } from "react-native";
import { connect } from "react-redux";
import { getTodosByLabelName } from "../reducers/todo";

const ToDoListItem = ({ item }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemTitle}>{item.title}</Text>
    <Text>{item.description}</Text>
  </View>
);

const ToDoListSection = ({ section }) => (
  <View style={styles.listSection}>
    <Text>{section.title}</Text>
  </View>
);

class TodoListComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.props.data}
          renderItem={ToDoListItem}
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
  },
  listItem: {
    padding: 15
  },
  itemTitle: {
    fontWeight: "bold"
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

const TodoListComponentContainer = connect(mapStateToProps, null)(
  TodoListComponent
);
export { TodoListComponentContainer as TodoListComponent };
