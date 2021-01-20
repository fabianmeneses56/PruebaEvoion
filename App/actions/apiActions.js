import { apiGet } from '../Api/api'

const PAGE_SIZE = 10;

const fetchMovieRequest = () => ({
  type: 'FETCH_MOVIE_REQUEST',
});

const fetchMovieResponse = (payload, error) => {
    if (error) {
      return {
        error: true,
        payload,
        type: 'FETCH_MOVIE_RESPONSE',
      };
    }
    return {
      payload,
      type: 'FETCH_MOVIE_RESPONSE',
    };
};
const setItemsCurrentPage = page => ({
    payload: page,
    type: 'SET_ITEMS_CURRENT_PAGE',
});
export const fetchGetMovies = (page) => {
    return (dispatch,getState) => {

        const state = getState();
        dispatch(setItemsCurrentPage(page));
        dispatch(fetchMovieRequest());

        apiGet({
            limit:PAGE_SIZE,
            page
        })
            .then(res => {
                dispatch(fetchMovieResponse(res));
            })
            .catch(res => {
                dispatch(fetchMovieResponse('500', true));
            })
    }
};