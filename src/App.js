import Front from './Layout/Front';
import About from './Layout/About'
import Main from './Layout/Main'
import Services from './Layout/Services'
import Footer from './Layout/Footer'
import Header from './Layout/Header';
import Cookies from 'universal-cookie';
import Toolbar from './Layout/Toolbar';
import Preferences from './Layout/Preferences'

import Database from './data/Database'
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
    this.saveProferences = this.saveProferences.bind(this)
    this.agreeAll = this.agreeAll.bind(this)
  }
  openMenu() { this.setState({ popUp: !this.state.popUp }) }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

  }
  handleScroll(e) { this.setState({ scrolled: true }) }
  openPreferences() { this.setState({ preferences: true, toolbar: false }) }
  agreeAll() {
    Database.preferences.forEach(element => {
      this.state.cookies.set(element.name, true, { path: '/' });
    })
    this.setState({ toolbar: false })
    console.log(this.state.cookies.getAll({ path: '/' }))
  }
  saveProferences(pref) {
    pref.forEach(element => {
      this.state.cookies.set(element.name, element.allow, { path: '/' });
    });
    this.setState({ preferences: false })
    console.log(this.state.cookies.getAll({ path: '/' }))
  }
  render() {
    const { popUp, scrolled, preferences, toolbar } = this.state;
    preferences ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    return (
      <div className={`App ${scrolled ? 'scrolled' : ''}`}>
        <Header openMenu={this.openMenu} popUp={popUp} />
        <Front />
        <About />
        <Main />
        <div id='wrapper'>
          <Services />
        </div>
        <Footer />
        {toolbar ? <Toolbar agree={this.agreeAll} preferences={this.openPreferences} /> : ''}
        {preferences ? <Preferences saveProferences={this.saveProferences} /> : ''}
      </div>
    )
  }
}
