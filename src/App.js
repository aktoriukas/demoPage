import Front from './Layout/Front';
import About from './Layout/About'
import Main from './Layout/Main'
import Services from './Layout/Services'
import Footer from './Layout/Footer'
import Header from './Layout/Header';
import Cookies from 'universal-cookie';
import Toolbar from './Layout/Toolbar';
import Preferences from './Layout/Preferences'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popUp: false,
      scrolled: false,
      preferences: false,
      toolbar: true,
      cookies: new Cookies(),

    }

    this.openMenu = this.openMenu.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.openPreferences = this.openPreferences.bind(this)
  }
  openMenu() { this.setState({ popUp: !this.state.popUp }) }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

  }
  handleScroll(e) { this.setState({ scrolled: true }) }
  openPreferences() { this.setState({ preferences: true, toolbar: false }) }
  agree() {
    console.log('agree')
  }
  saveProferences(pref) {
    console.log(pref)
  }
  render() {
    const { popUp, scrolled, preferences, toolbar } = this.state
    return (
      <div className="App">
        <Header openMenu={this.openMenu} popUp={popUp} scrolled={scrolled} />
        <Front />
        <About />
        <Main />
        <div id='wrapper'>
          <Services />
        </div>
        <Footer />
        {toolbar ? <Toolbar agree={this.agree} preferences={this.openPreferences} /> : ''}
        {preferences ? <Preferences saveProferences={this.saveProferences} /> : ''}
      </div>
    )
  }
}
