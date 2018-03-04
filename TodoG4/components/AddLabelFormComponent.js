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
        <TextInput autoFocus={true} style={styles.input} onChangeText={(text) => this.setState({...this.state, label: text})} placeholder="new label"></TextInput>
        <Button title="Add label" disabled={!this.state.label || !this.state.label.length} onPress={() => this._addLabel()}></Button>
        <Button title="Cancel" onPress={() => this._cancel()}></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 15,
    marginTop: 35
  },
  label: {
    marginBottom: 15
  },
  input: {
    fontSize: 20,
    padding: 5,
    marginBottom: 30
  }
});