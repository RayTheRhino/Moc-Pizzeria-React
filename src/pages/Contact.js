import { Label } from '@mui/icons-material'
import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'


function Contact() {
    return (
    <div className='contact'>
        <div className='leftSide' style = {{backgroundImage:`url(${PizzaLeft})`}}></div>
        <div className='rightSide'>
            <h1> Contact Us </h1>

            <form id='contact-form' method='POST'>
                <Label >Full Name</Label>
                <input name='name' placeholder='Enter full name..' type="text"></input>
            </form>
        </div>
    </div>
    )
}

export default Contact