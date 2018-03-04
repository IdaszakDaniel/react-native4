import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import DetailsDisplay from './DetailsDisplayComponent';
import DetailsEdit from './DetailsEditComponent';
import {connect} from "react-redux";
import {getTodoById} from '../reducers/todo';
import {getLabelById} from '../reducers/label';
import {UPDATE_TODO} from '../actions/types';
import { get } from 'lodash';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  btnContainer: {
    justifyContent: 'flex-end'
  },
  btn: {
    width: 30
  },
  topButton: {
    color: 'blue'
  },
  view_topButton: {
    paddingRight: 20
  }
});

class TodoDetails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Todo',
      headerRight: (
        <View style={styles.view_topButton}>
          {get(navigation, 'state.params.isToggled')
          ? <View/>
          : <Button
              onPress={get(navigation, 'state.params.toggle', () => {})}
              title="Edit"
              style={styles.topButton}
            />
          }
        </View>
      )
    };
  };

  componentWillMount() {
    this.props.navigation.setParams({ toggle: this._toggle, isToggled: false });
  }

  _toggle = () => {
    this.setState({ edit: true });
    this.props.navigation.setParams({ isToggled: true });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.edit
          ? <DetailsEdit element={this.props.todo} edit={(todo) => {
            this.setState({ edit: false });
            this.props.update(todo);
          }}/> 
          : <DetailsDisplay element={this.props.todo}/>
        }
      </View>
    );
  }
}

const mapStateToProps = (state, props) => {
  let todo = getTodoById(state,props.navigation.state.params.id);
  let label = getLabelById(state,todo.labelId);
  todo.label = label.label;
  return {
    todo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    update: (todo) => {
      dispatch({
        type: UPDATE_TODO,
        payload: todo
      });
    }
  }
}


const TodoDetailsComponentContainer = connect(mapStateToProps, mapDispatchToProps)(
  TodoDetails
);
export default TodoDetailsComponentContainer;
