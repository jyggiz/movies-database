import React from 'react';

import { Link } from 'react-router-dom';

import './ShowCard.css';

function ShowsList (props) {
    const { id, image, name, rating, premiered, _id } = props.show;
    return (
        <Link to={`/show/${id}`} className='show-card' key={id}>
            <img className='show-card__image' src={image} alt=""/>
            <div className='show-card__info-container'>
                <span className='show-card__title'>{name}</span>
                <span className='show-card__rating'>{rating}</span>
                <span className='show-card__date'>{premiered}</span>
                {_id
                    ? <button className='show-card__button'>
                        Delete
                        </button>
                    : null
                }
            </div>
        </Link>
    )
}

ShowsList.defaultProps = {

};

export default ShowsList;
