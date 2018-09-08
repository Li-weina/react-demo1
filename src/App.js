import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from 'pages/Home/Home'
import Search from 'pages/Search/Search'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
export default class App extends Component {
  render() {
    return (
      <Router>
          <div>
          <Header></Header>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/search" component={Search}></Route>
            </Switch>
          <Footer></Footer>
          </div>
      </Router>
    )
  }
}
