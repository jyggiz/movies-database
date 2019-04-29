import React from 'react';

import './ShowProfile.css';

const ShowProfile = (props) => {
    const {
        posterImage,
        name,
        status,
        rating,
        networkName,
        language,
        type,
        genres
    } = props;
    return (
            <div className='show-profile'>
                <div className='show-poster'>
                    <img className='show-poster__image' src={ posterImage } alt=""/>
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
                    <button className='show-info-list__button'>
                        Add to favourites
                    </button>
                </ul>

            </div>
    )
};

export default ShowProfile;
