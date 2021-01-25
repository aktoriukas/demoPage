import React, { Component } from 'react';
import Background from '../video/background.mp4'

export default class Front extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <section className='welcome-page'>
                <div className='background'>
                    <video autoPlay loop muted >
                        <source src={Background} type='video/mp4' />
                        <source src={Background} type="video/ogg" />
                    </video>
                </div>
                <div className='title'>
                    <h1>demo-tech</h1>
                </div>
            </section>
        )
    }
}