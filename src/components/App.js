import React from "react";
import "./App.css";

/*
import ReactDOM from 'react-dom';
import { store, createStore } from './store/reduxStore';
import dataReducer from './store/reducers/dataReducer';
import {combineReducers} from 'redux';
*/

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import ProfileScreen from "./screens/ProfileScreen";

/*
const AppWrapper = () => {
  const rootReducer = combineReducers({
    content: dataReducer,
  });

  const store = createStore(rootReducer);

  return (
    <Provider store={store}> // Set context
      <App /> // Now App has access to context
    </Provider>
  )
}
*/

//const App = () => {
function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                //Logged In
                console.log(userAuth);
                dispatch(
                    login({
                        uid: userAuth.uid,
                        email: userAuth.email,
                    })
                );
            } else {
                //Logged out
                dispatch(logout());
            }
        });
        return unsubscribe;
    }, [dispatch]);

    return (
        <div className="app">
            <Router>
                <LoginScreen />
                <Switch>
                    <Route path="/profile">
                        <ProfileScreen />
                    </Route>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                </Switch>
                
            </Router>
        </div>
    );
}

export default App;
