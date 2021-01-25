import React, { Component } from 'react'
import Button from "./Elements/Button";

export default class Services extends Component {
    render() {
        return (
            <section id='services'>
                <ul className='projects'>
                    <li>
                        <h3>New Projects</h3>
                        <p>
                            Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Non arcu risus quis varius quam quisque id. Ac turpis egestas sed tempus urna et pharetra.
                        </p>
                        <Button text='to learn more' />
                    </li>
                    <li>
                        <h3>Outgoing Projects</h3>
                        <p>
                            Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Non arcu risus quis varius quam quisque id. Ac turpis egestas sed tempus urna et pharetra.
                        </p>
                        <Button text='to learn more' />
                    </li>
                    <li>
                        <h3>Future plans</h3>
                        <p>
                            Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Non arcu risus quis varius quam quisque id. Ac turpis egestas sed tempus urna et pharetra.
                        </p>
                        <Button text='contact us' />
                    </li>
                    <li>
                        <h3>Our Goals</h3>
                        <p>
                            Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Non arcu risus quis varius quam quisque id. Ac turpis egestas sed tempus urna et pharetra.
                        </p>
                        <Button text='to learn more' />
                    </li>
                </ul>
                <div className='partners'>
                    <h3>We have worked with</h3>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </section>
        )
    }
}