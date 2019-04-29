import React from 'react';

import { Link } from 'react-router-dom';

import './ShowCard.css';

function ShowsList (props) {
    const { id, image, name, rating, premiered } = props.show;
    const finalRating = rating && rating.average ? rating.average : 'Rating none';
    const imageSrc = image && image.original
        ? image.original
        : 'http://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg';
    const finalDate = premiered ? premiered.slice(0, 4) : 'Date is unknown';
    return (
        <Link to={`/show/${id}`} className='show-card' key={id}>
            <img className='show-card__image' src={imageSrc} alt=""/>
            <div className='show-card__info-container'>
                <span className='show-card__title'>{name}</span>
                <span className='show-card__rating'>{finalRating}</span>
                <span className='show-card__date'>{finalDate}</span>
            </div>
        </Link>
    )
}

ShowsList.defaultProps = {

};

export default ShowsList;
