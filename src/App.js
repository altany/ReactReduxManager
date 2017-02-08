import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
