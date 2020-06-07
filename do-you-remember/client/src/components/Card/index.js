import React from 'react';
import "./Card.css";


const Card = props => (

        <div
        className="allCards"
        //Give each card an ID
        key={props.id}
        onClick={() => props.handleClick(props.id, props.clicked)}
        >
            <img
            id={props.name}
            src={props.image}
            alt={props.name}
            />

        </div>

);

export default Card 