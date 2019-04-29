import React from 'react';
import { connect } from 'react-redux';
import { handleDeleteFav } from "../../actions/fav";

import { Link } from 'react-router-dom';

import './ShowCard.css';

function ShowsList (props) {
    const { id, image, name, rating, premiered, _id } = props.show;
    return (
        <div className='show-card'>
        <Link to={`/show/${id}`} key={id}>
            <img className='show-card__image' src={image} alt=""/>
            <div className='show-card__info-container'>
                <span className='show-card__title'>{name}</span>
                <span className='show-card__rating'>Rate: {rating}</span>
                <span className='show-card__date'>{premiered}</span>

            </div>
        </Link>
    {_id
        ? <button
            onClick={() => props.handle(_id)}
            className='show-card__button'>
            Delete
        </button>
        : null
    }
        </div>
    )
}

export default connect()(ShowsList);
