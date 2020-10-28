import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './Containers/About';
import LinkedinProfile from './Components/LinkedinProfile.js'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/about/" component={About} />
          <Route path="/linkedIn/" component={LinkedinProfile} />
        </Switch>
      </Router>    
      {/* <App /> */}
    </Provider>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
