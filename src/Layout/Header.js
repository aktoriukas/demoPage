import React, { Component } from 'react'
import Menu from './Elements/Menu';

export default class Header extends Component {

    render() {
        const { scrolled, popUp } = this.props
        return (
            <header
                id='header'
                className={`${popUp ? 'open' : 'close'} ${scrolled ? 'scrolled' : ''}`}>
                <Menu />
                <div onClick={this.props.openMenu} className='burger-menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>
        )
    }
}
