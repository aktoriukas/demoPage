import React, { Component } from 'react'
import TechImg from '../image/tech.jpg'

export default class Main extends Component {
    render() {
        return (
            <section id='main'>
                <div className='inner'>
                    <div className='image-container'><img alt='work' src={TechImg}></img></div>
                    <div className='what-we-do'>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </li>
                            <li>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </li>
                            <li>
                                Urna molestie at elementum eu facilisis sed odio. Tortor id aliquet lectus proin nibh nisl condimentum id venenatis.
                                Phasellus vestibulum lorem sed risus ultricies tristique nulla.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
