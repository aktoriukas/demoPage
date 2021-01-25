import Front from './Layout/Front';
import About from './Layout/About'
import Main from './Layout/Main'
import Services from './Layout/Services'
import Footer from './Layout/Footer'
import Header from './Layout/Header';


import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      popUp: false,
      scrolled: false
    }
    this.openMenu = this.openMenu.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }
  openMenu() { this.setState({ popUp: !this.state.popUp }) }
  componentDidMount() { window.addEventListener('scroll', this.handleScroll); }
  handleScroll(e) { this.setState({ scrolled: true }) }

  render() {
    const { popUp, scrolled } = this.state
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
      </div>
    )
  }
}
