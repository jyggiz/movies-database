import axios from 'axios';

export const GET_SHOWS_LIST     = 'GET_SHOWS_LIST';
export const GET_SHOW           = 'GET_SHOW';
export const CLEAR_SHOW_ITEM    = 'CLEAR_SHOW_ITEM';
export const SEARCH_SHOW        = 'SEARCH_SHOW';
export const CLEAR_SEARCH_SHOWS = 'CLEAR_SEARCH_SHOWS';

export const getShow = (show) => ({
    type: GET_SHOW,
    show
});

export const clearShowItem = () => ({
    type: CLEAR_SHOW_ITEM
});

export const handleGetShowById = (id) => (dispatch) => {
    axios.get(`/api/tv/show/${id}`)
        .then(({ data }) => {
            console.log(data);
            dispatch(getShow(data))
        })
        .catch((error) => {
            console.log(error);
        });
};

export const getSearchShows = (searchShows) => ({
    type: SEARCH_SHOW,
    searchShows
});

export const handleSearchShows = (query) => (dispatch) => {
    axios.get(`/api/tv/shows/${query}`)
        .then(({ data }) => {
            dispatch(getSearchShows(data.map((item) => item.show)));
            console.log(data.map((item) => item.show));
        })
        .catch((error) => {
            console.log(error);
        });
};

export const handleClearSearchShows = () => ({
    type: CLEAR_SEARCH_SHOWS
});

export const getShowsList = (shows) => ({
    type: GET_SHOWS_LIST,
    shows
});

export const handleGetShowsList = (page) => (dispatch) => {
    const apiShowPage = (page - 1) / 12;
    console.log(apiShowPage);
    axios.get(`/api/tv/shows/pages/${apiShowPage}`)
        .then(({ data }) => {
            console.log(data);
            localStorage.setItem('shows', JSON.stringify(data.slice(0, 240)));
            localStorage.setItem('apiPage', JSON.stringify({
                firstPage: Math.floor((page - 1 ) / 12) * 12 + 1,
                lastPage: (Math.floor((page - 1) / 12 ) + 1 )* 12
            }));
            dispatch(handleGetShowsByPage(page));
        })
        .catch((error) => {
            console.log(error);
        })
};


export const handleGetShowsByPage = (page) => (dispatch) => {
    const shows = JSON.parse(localStorage.getItem('shows'));
    const apiPage = JSON.parse(localStorage.getItem('apiPage'));
    if (shows &&
        apiPage &&
        page >= apiPage.firstPage &&
        page <= apiPage.lastPage) {
        const finalPage = page % 12 === 0 ? page : page % 12;
        dispatch(getShowsList(shows.slice((page - 1) % 12 * 20, finalPage * 20)));
    } else {
        dispatch(handleGetShowsList(page));
    }
};
