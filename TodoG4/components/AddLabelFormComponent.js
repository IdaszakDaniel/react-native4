import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export class AddLabelForm extends Component {

  constructor() {
    super();

    this.state = {
      label: null
    }
  }

  _addLabel() {
    this.props.addLabel(this.state.label);
  }

  _cancel() {
    this.props.cancel();
  }

  /** 
   * TODO FSS WHY textinput text is not visible?!
  */
  render() {
    return (
      <View style={styles.formContainer}>
        <Text style={styles.label}>Add new todo label:</Text>
        <TextInput style={styles.input} onChangeText={(text) => this.setState({...this.state, label: text})} placeholder="new label"></TextInput>
        <Button title="Add label" onPress={() => this._addLabel()}></Button>
        <Button title="cancel" onPress={() => this._cancel()}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 30,
  },
  label: {
    marginBottom: 15
  },
  input: {
    height: 60,
    padding: 10,
    flex: 1,
    fontSize: 18,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#000',
    marginBottom: 15
  }
});