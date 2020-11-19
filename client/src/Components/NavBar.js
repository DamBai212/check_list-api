import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
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

        )
    }
}
