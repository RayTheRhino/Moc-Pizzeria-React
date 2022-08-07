//rfce
import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
    return (
    <div className='about'>
        <div className='aboutTop' 
        style = {{backgroundImage:`url(${MultiplePizzas})`}}></div>
        <div className='aboutBottom'>
            <h1> Our Story </h1>
            <p> Welcome to our little family pizza shop.
                We are located in Maiami but we delever everywhere.
                out moto is "happy belly is full one" and you can see it by looking at the dish size.

            </p>
        </div>
    </div>
    ) 
}

export default About