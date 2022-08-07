import React from 'react'

function Menultem({image, name, price}) {
    return (
    <li className='menuItem'>
        <div>
            <div>style = {{backgeroungImage: `url(${image})`}}</div>
            <h1> {name} </h1>
            <p> ${price} </p>
        </div>
    </li>
    
    );
};

export default Menultem;