import React from 'react';

import ShowCard from '../ShowCard/ShowCard';

import './ShowsList.css';

function ShowsList (props) {
    return (
        <ul className='show-list'>
            { props.shows && props.shows.map((show) => {
                return (
                        <ShowCard
                            handle={show._id ? props.handle : null}
                            show={show}
                            key={show.id}/>
                )
            }) }
        </ul>
    )
}

export default ShowsList;
