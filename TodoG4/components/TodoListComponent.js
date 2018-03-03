import React, { Component } from "react";
import { StyleSheet, Text, View, Button, SectionList } from "react-native";
import { connect } from "react-redux";
import { getTodosByLabelName } from "../reducers/todo";

const todos = [
  {
    id: 1,
    title: "todo title 1",
    description: "todo 1 description",
    label: "label 1",
    done: false
  }
];

const todos2 = [
  {
    id: 2,
    title: "todo title 2",
    description: "todo 2 description",
    label: "label 2",
    done: false
  },
  {
    id: 3,
    title: "todo title 3",
    description: "todo 2 description",
    label: "label 2",
    done: false
  }
];

const sectionsData = [
  {
    data: todos,
    title: "sekcja 1"
  },
  {
    data: todos2,
    title: "sekcja 2"
  }
];

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
      <Text>{JSON.stringify(this.props.todos)} </Text>
        <SectionList
          sections={sectionsData}
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

const mapStateToProps = (state, props) => ({
  todos: getTodosByLabelName(state)
});

const TodoListComponentContainer = connect(mapStateToProps, null)(
  TodoListComponent
);
export { TodoListComponentContainer as TodoListComponent };
