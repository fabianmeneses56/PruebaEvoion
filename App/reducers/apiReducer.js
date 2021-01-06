import { apiGet } from '../Api/api'

const initialState = {
    movieTickets: []
};

const GET_MOVIETICKETS = 'GET_MOVIETICKETS';

//actions
const getMovieTickets = (movies) => ({ type: GET_MOVIETICKETS, payload: movies });


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


export default (state = initialState, action) => {
    switch (action.type) {
        //en todos los casos regresamos un objeto nuevo en el cual incluimos todos las propiedades del objeto state con ...state
        case GET_MOVIETICKETS:
            //cambiamos el valor de la propiedad post  
            return { ...state, movieTickets: action.payload };

        default:
            return { ...state };
    }
}