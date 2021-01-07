import { apiGet } from '../Api/api'

const getMovieTickets = (movies) => ({ type: 'GET_MOVIETICKETS', payload: movies });

export const fetchGetMovies = () => {
    return (dispatch) => {
        apiGet()
            .then(res => {
                dispatch(getMovieTickets(res));
            })
            .catch(res => {
                console.log(res);
            })
    }
};