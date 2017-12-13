import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import firebase from 'firebase';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAKOBQMG4-OU6k1vu8ZYD46jQvXHqKNYyY',
      authDomain: 'authentication-39eeb.firebaseapp.com',
      databaseURL: 'https://authentication-39eeb.firebaseio.com',
      projectId: 'authentication-39eeb',
      storageBucket: 'authentication-39eeb.appspot.com',
      messagingSenderId: '830340309320'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    )
  }
}

export default App;
