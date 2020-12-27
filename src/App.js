import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import NoMatch from './components/NoMatch/NoMatch';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Prescription from './components/Prescription/Prescrioption/Prescription';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path='/appointment'>
            <Appointment></Appointment>
          </Route>
          <PrivateRoute exact path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute exact path='/dashboard/appointment'>
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute exact path='/dashboard/allPatients'>
            <AllPatients></AllPatients>
          </PrivateRoute>
          <PrivateRoute exact path='/deshboard/prescription'>
            <Prescription></Prescription>
          </PrivateRoute>

          <Route exact path='/login'>
            <Login></Login>
          </Route>

          <Route exact path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
