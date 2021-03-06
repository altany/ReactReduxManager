import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene
        key='login'
        component={LoginForm}
        title='Login / Register'
        initial // optional since it's first
      />
      <Scene
        key='employeeList'
        component={EmployeeList}
        title='Employees'
      />
    </Router>
  );
};

export default RouterComponent;
