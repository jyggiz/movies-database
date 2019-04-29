import React from 'react';

import './ShowProfile.css';

const ShowProfile = (props) => {

    const handleSubmit = (rating,
                          name,
                          tvMazeId,
                          imageSrc,
                          premiered) => {
        props.handleAddFavShow(rating, name, tvMazeId, imageSrc, premiered);
    };

    const {
        imageSrc,
        name,
        status,
        rating,
        networkName,
        language,
        type,
        genres,
        tvMazeId,
        premiered
    } = props;

    const show = {
        rating,
        name,
        tvMazeId,
        imageSrc
    };

    console.log(show);
    return (
            <div className='show-profile'>
                <div className='show-poster'>
                    <img className='show-poster__image' src={ imageSrc } alt=""/>
                </div>
                <ul className='show-info-list'>
                    <h1 className='show-info-list__title'>{ name }</h1>
                    <li className='show-info-list__item'>
                        <span className='show-info-list__hint'>Status</span>
                        <span>{ status }</span>
                    </li>
                    <li className='show-info-list__item'>
                        <span className='show-info-list__hint'>Rating</span>
                        <span>{ rating }</span>
                    </li>
                    <li className='show-info-list__item'>
                        <span className='show-info-list__hint'>Network</span>
                        <span>{ networkName }</span>
                    </li>
                    <li className='show-info-list__item'>
                        <span className='show-info-list__hint'>Language</span>
                        <span>{ language }</span>
                    </li>
                    <li className='show-info-list__item'>
                        <span className='show-info-list__hint'>Type</span>
                        <span>{ type }</span>
                    </li>
                    <li className='show-info-list__item'>
                        <span className='show-info-list__hint'>Genres</span>
                        <span>{ genres }</span>
                    </li>
                    <button
                        className='show-info-list__button'
                        onClick={() => handleSubmit( rating,
                            name,
                            tvMazeId,
                            imageSrc,
                            premiered)}>
                        Add to favourites
                    </button>
                </ul>

            </div>
    )
};

export default ShowProfile;
