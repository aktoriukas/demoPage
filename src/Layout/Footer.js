import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <section id='footer'>
                <ul className='contacts'>
                    <li><a href='home'>demo@projects.co.uk</a></li>
                    <li><a href='home'>+44 (0)1342 841 225</a></li>
                    <li><a href='home'>+44 (0)0943 240 173</a></li>
                </ul>
                <table className='working-hours'>
                    <tbody>
                        <tr><th>Monday</th><td>9am - 5pm</td></tr>
                        <tr><th>Tuesday</th><td>9am - 5pm</td></tr>
                        <tr><th>Wednesday</th><td>9am - 5pm</td></tr>
                        <tr><th>Thursday</th><td>9am - 5pm</td></tr>
                        <tr><th>Friday</th><td>9am - 5pm</td></tr>
                        <tr><th>Saturday</th><td>Closed</td></tr>
                        <tr><th>Sunday</th><td>Closed</td></tr>
                    </tbody>
                </table>
                <ul className='support'>
                    <li><a href='home'><strong>Get Support</strong></a></li>
                    <li><a href='home'>Customer Service</a></li>
                    <li><a href='home'>Tech Support</a></li>
                    <li><a href='home'>Network Support</a></li>
                </ul>
                <ul className='get-started'>
                    <li><a href='home'><strong>Get Started</strong></a></li>
                    <li><a href='home'>Request demo</a></li>
                    <li><a href='home'>Contact us</a></li>
                    <li><a href='home'>Request a Quote</a></li>
                </ul>
            </section>
        )
    }
}