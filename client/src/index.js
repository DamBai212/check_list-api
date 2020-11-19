import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Containers/Home';
import About from './Components/About'
import NavBar from './Components/NavBar'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom'


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <Router>

        <NavBar />
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/home/" component={Home} />
          <Route path="/about/" component={About} />
        </Switch>
      </Router>    
    
    </Provider>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
