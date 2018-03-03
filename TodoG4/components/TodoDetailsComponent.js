import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import DetailsDisplay from './DetailsDisplayComponent';
import DetailsEdit from './DetailsEditComponent';

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

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false
    };
  }

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: 'Todo',
      headerRight: (
        <View style={styles.view_topButton}>
          {params.isToggled 
          ? <View/>
          : <Button
              onPress={params.toggle}
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

  todo = {
    label: 'some label',
    title: 'some title',
    desc: 'some desc'
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.edit
          ? <DetailsEdit element={this.todo} edit={() => this.setState({ edit: false })}/> 
          : <DetailsDisplay element={this.todo}/>
        }
      </View>
    );
  }
}

