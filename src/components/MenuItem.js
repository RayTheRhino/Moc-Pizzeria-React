import React from 'react'

function Menultem({image, name, price}) {
    return (
    <div className='menuItem'>
        <div>style = {{backgeroungImage: `url(${image})`}}</div>
        <h1> {name} </h1>
        <p> ${price} </p>
    </div>
    )
}

export default Menultem;