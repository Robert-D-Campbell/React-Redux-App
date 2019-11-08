import React from 'react';

const Card = props => {
    if (props.card.image_uris) {
        return (
            <div className='card-container'>
                <img src={props.card.image_uris.small} alt='Card' />
            </div>
        )
    } else {
        return (
            <div className='card-container'>
                <p>{props.card.name}</p>
            </div>
        )
    }

};

export default Card;