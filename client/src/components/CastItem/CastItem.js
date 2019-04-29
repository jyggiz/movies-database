import React from 'react';

import './CastItem.css';

const CastItem = ({ index, imageSrc, character, person }) => {
    return (
        <li className='cast-list__item' key={index}>
            <img className='cast-list__image'
                 src={imageSrc} alt={ character.name }/>
            <span className='cast-list__character'>{ character.name }</span>
            <span className='cast-list__text'>by</span>
            <span className='cast-list__person'>{ person.name }</span>
        </li>
    );
};

export default CastItem;
