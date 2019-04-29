import React from 'react';

import ShowCard from '../ShowCard/ShowCard';

import './ShowsList.css';

function ShowsList (props) {
    return (
        <ul className='show-list'>
            { props.shows && props.shows.map((show) => {
                return (
                        <ShowCard show={show} key={show.id}/>
                )
            }) }
        </ul>
    )
}

ShowsList.defaultProps = {

};

export default ShowsList;
