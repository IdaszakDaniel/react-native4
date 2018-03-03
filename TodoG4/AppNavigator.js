import React from 'react';
import { StackNavigator } from 'react-navigation';
import TodoComponent  from './todoComponent.js';

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