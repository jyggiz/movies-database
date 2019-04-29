import React from 'react';
import { connect } from 'react-redux';
import {
    handleGetShowById,
    clearShowItem
} from "../../../actions/show";

import Loader from 'react-loader-spinner';

import './ShowPage.css';
import ShowProfile from "../../ShowProfile/ShowProfile";
import CastList from "../../CastList/CastList";

class ShowPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: null
        };
    }
    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.handleGetShowById(id);
    }

    componentWillReceiveProps(nextProps) {
        const { show } = nextProps.show;
        this.setState(() => ({
            show
        }));
    }

    componentWillUnmount() {
        this.props.clearShowItem();
    }

    render () {
        if (this.state.show) {
            const {
                name,
                genres,
                summary,
                language,
                id,
                image,
                network,
                rating,
                status,
                type,
                _embedded
            } = this.state.show;

            const finalRating = rating && rating.average ? rating.average : 'None';
            const networkName = network && network.name ? network.name : 'None';
            const finalName = name ? name : 'None';
            const finalGenres = genres ? genres : 'None';
            const finalLanguage = language ? language : 'None';
            const finalStatus = status ? status : 'None';
            const finalType = type ? type : 'None';
            const finalCast = _embedded && _embedded.cast ? _embedded.cast : [];

            const posterImageSrc = image && image.original
                ? image.original
                : 'http://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-3.jpg';

            return (
                <div className='show-page-container'>
                    <ShowProfile
                        name={finalName}
                        rating={finalRating}
                        networkName={networkName}
                        genres={finalGenres}
                        language={finalLanguage}
                        type={finalType}
                        status={finalStatus}
                        posterImage={posterImageSrc}
                    />

                    <div className='summary'>
                        <span className='summary__title'>Summary</span>
                        <div
                            className='summary__text'
                            dangerouslySetInnerHTML={{__html: summary}}>
                        </div>
                    </div>

                    <CastList cast={finalCast}/>
                </div>
            )
        } else {
            return (
                <div className='show-page-container'>
                    <Loader
                        className='loader'
                        type="Triangle"
                        color="#e52863"
                        height={300}
                        width={300}
                    />
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => ({
    show: state.show
});

const mapDispatchToProps = {
    handleGetShowById,
    clearShowItem
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPage);
