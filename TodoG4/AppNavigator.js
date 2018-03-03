import React from 'react';
import { StackNavigator } from 'react-navigation';
import TodoComponent  from './components/TodoComponent';

export default StackNavigator(
  {
    Home: {
      screen: TodoComponent,
    }
  },
  {
    initialRouteName: 'Home',
  }
);