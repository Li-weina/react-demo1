import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './header.css'
export default class Header extends Component {
  render() {
    return (
      <div className="header-wrap">
        <Link to="" className="subbar-button">ok</Link>
        <h2 className="logo">1</h2>
        <Link to="" className="login-button">2</Link>
        <Link to="" className="search-button">3</Link>
      </div>
    )
  }
}
