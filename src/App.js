import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
