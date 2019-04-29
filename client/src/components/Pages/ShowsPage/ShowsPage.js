import React from 'react';
import { connect } from 'react-redux';
import { handleGetShowsList, handleGetShowsByPage} from "../../../actions/show";

import ShowsList from '../../ShowsList/ShowsList';
import Loader from 'react-loader-spinner';
import Pagination from 'rc-pagination';

import './ShowsPage.css';
import 'rc-pagination/assets/index.css';

class ShowsPage extends React.Component {
    constructor (props) {
        super(props);
        console.log(this.props);
        this.state = {
            shows: null,
            page: 1,
            loading: false
        };
    }

    componentDidMount() {
        this.setState(() => ({
            loading: true
        }));
        const { page } = this.state;
        this.props.handleGetShowsByPage(page);
    }

   componentWillReceiveProps(nextProps) {
        const { shows } = nextProps;
        const newShows = shows.map(({ rating, image, premiered, id, name}) => ({
            rating: rating && rating.average ? rating.average : 'Rating none',
            image: image && image.original
           ? image.original
           : 'http://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg',
            premiered: premiered ? premiered.slice(0, 4) : 'Date is unknown',
            id,
            name
        }));
        this.setState(() => ({
            shows: newShows,
            loading: false
        }));

    }

    onChange = (page) => {

        const apiPage = JSON.parse(localStorage.getItem('apiPage'));

        if (page >= apiPage.lastPage || page <= apiPage.firstPage) {
            this.setState({
                loading: true
            });
        }

        this.props.handleGetShowsByPage(page);
        this.setState({
            page,
        });
    };

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
                        : <ShowsList shows={this.state.shows}/>
                    }
                    <Pagination
                        className='pagination'
                        onChange={this.onChange}
                        current={this.state.page}
                        total={3300}
                    />
                </div>
        )
    }
}

const mapStateToProps = (state) => {
                console.log(state);
                return {
    shows: state.show.shows,
    loading: state.loading
                }
};

const mapDispatchToProps = {
    handleGetShowsList,
    handleGetShowsByPage
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowsPage);
