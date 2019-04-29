import React from 'react';
import { connect } from 'react-redux';
import {
    handleGetFavShows,
    handleDeleteFav
} from "../../../actions/fav";

import ShowsList from '../../ShowsList/ShowsList';
import Loader from 'react-loader-spinner';

import 'rc-pagination/assets/index.css';
import './FavoritesPage.css';

class FavoritesPage extends React.Component {
    constructor (props) {
        super(props);
        console.log(this.props);
        this.state = {
            favs: null,
            loading: false
        };
    }

    componentDidMount() {
        this.setState(() => ({
            loading: true
        }));
        this.props.handleGetFavShows();
    }

    handleDeleteFav = (_id) => {
        this.props.handleDeleteFav(_id);
        //window.location.reload(); // sorry za hardcoding
    };

    componentWillReceiveProps(nextProps) {
        this.setState(() => ({
            loading: true
        }));
        console.log(nextProps);
        const { favs } = nextProps;
        const newFavs = favs.map(({ tvMazeId, poster, name, _id, avgRating, premiered }) => ({
            id: tvMazeId,
            _id,
            image: poster,
            name,
            rating: avgRating,
            premiered
        }));
        console.log(newFavs);
       this.setState(() => ({
            favs: newFavs,
            loading: false
        }));
    }

    render () {
        return (
            <div className='shows-list-container'>
                {this.state.loading
                    ? <Loader
                        className='loader'
                        type="Triangle"
                        color="#e52863"
                        height={300}
                        width={300}
                    />
                    : <ShowsList
                        handle={this.handleDeleteFav}
                        shows={this.state.favs}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        favs: state.fav.favs,
        loading: state.loading
    }
};

const mapDispatchToProps = {
    handleGetFavShows,
    handleDeleteFav
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoritesPage);
