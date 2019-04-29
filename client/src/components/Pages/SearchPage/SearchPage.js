import React from 'react';
import { connect } from 'react-redux';
import { handleSearchShows, handleClearSearchShows } from "../../../actions/show";

import ShowsList from '../../ShowsList/ShowsList';
import Loader from "react-loader-spinner";

import './SearchPage.css';

class SearchPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchShows: null,
            loading: false
        };
    }

    componentWillUnmount() {
        this.props.handleClearSearchShows();
    }

    componentWillReceiveProps(nextProps) {
        const { searchShows } = nextProps;
        console.log(searchShows);
        const newShows = searchShows.map(({ rating, image, premiered, id, name}) => ({
            rating: rating && rating.average ? rating.average : 'Rating none',
            image: image && image.original
                ? image.original
                : 'http://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg',
            premiered: premiered ? premiered.slice(0, 4) : 'Date is unknown',
            id,
            name
        }));
        console.log(newShows);
        this.setState(() => ({
            searchShows: newShows,
            loading: false
        }));

    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState(() => ({
            loading: true
        }));
        this.props.handleSearchShows(this.input.value);
    };

    render () {
        return (
            <div className='search-page-container'>
                <form className='search' onSubmit={this.handleSubmit}>
                    <input
                        className='search__input'
                        type="search"
                        placeholder='Type your query...'
                        name='search'
                        autoComplete='off'
                        ref={(input) => this.input = input}
                    />
                    <input
                        className='search__button'
                        type="submit"
                        value='Search'
                    />
                </form>
                {!this.state.loading
                    ? <ShowsList shows={this.state.searchShows} />
                    : <Loader
                        className='loader'
                        type="Triangle"
                        color="#e52863"
                        height={300}
                        width={300}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    searchShows: state.show.searchShows,
    loading: state.loading
});

const mapDispatchToProps = {
    handleSearchShows,
    handleClearSearchShows
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchPage);

