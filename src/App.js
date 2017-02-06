import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBKwbOSS04deOllmIUQgXHe1NB-X_NwANQ',
      authDomain: 'react-redux-manager.firebaseapp.com',
      databaseURL: 'https://react-redux-manager.firebaseio.com',
      storageBucket: 'react-redux-manager.appspot.com',
      messagingSenderId: '671183966476'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    )
  }
};

export default App;
