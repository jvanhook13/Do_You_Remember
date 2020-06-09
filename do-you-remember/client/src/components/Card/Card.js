import React from 'react';
import "./Card.css";


const Card = props => (

    <div
    style={{backgroundImage:`url(${props.src})`}}
    alt={props.alt}
    className="block"
    onClick={() => props.handleClick(props.name)}>
</div>
)


export default Card 