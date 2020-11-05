import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Containers/Home';
import About from './Components/About.js'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <Router>

      <nav>
          <ul className="header">
            <li>
              <Link to="/">CheckList</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/home/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/home/" component={Home} />
          <Route path="/about/" component={About} />
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
