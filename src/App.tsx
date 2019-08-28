import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { load, save } from 'redux-localstorage-simple';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import './App.css';
import rootReducer from './helpers/rootReducer';
import logo from './logo.svg';
import MovieDetail from './movies/MovieDetail';
import MoviesList from './movies/MoviesList';
import Toggle from './toggle/Toggle';

const middleware = [reduxLogger, thunk];

const store = createStore(rootReducer, load(), composeWithDevTools(applyMiddleware(...middleware, save())));

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
        </header>
        <Toggle />
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
