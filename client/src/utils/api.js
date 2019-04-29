const apiUrl = 'http://api.tvmaze.com/';

export async function fetchMoviesByPage (page) {
    return await fetch(`${apiUrl}shows?page=${page}`);
}

export async function fetchMovieById (id) {
    return await fetch(`${apiUrl}show/${id}`);
}
