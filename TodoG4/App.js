import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import AppNavigator from './AppNavigator';
import { connect } from 'react-redux';


export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
};