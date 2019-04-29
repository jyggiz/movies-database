import React from 'react';

import './CastList.css';
import CastItem from "../CastItem/CastItem";

const CastList = ({ cast }) => {
    return (
        <div className='cast'>
            <span className='cast-title'>
                Cast
            </span>
            <ul className='cast-list'>
                {cast.map(({ character, person }, index) => {
                    const imageSrc = character.image && character.image.original
                        ? character.image.original
                        : 'https://pngimage.net/wp-content/uploads/2018/05/default-user-profile-image-png-6.png';
                    return (
                        <CastItem
                            character={character}
                            person={person}
                            index={index}
                            imageSrc={imageSrc}
                        />
                    )
                })}
            </ul>
        </div>
    )
};

export default CastList;
