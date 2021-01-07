import { apiGet } from '../Api/api'

const initialState = {
    movieTickets: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        //en todos los casos regresamos un objeto nuevo en el cual incluimos todos las propiedades del objeto state con ...state
        case 'GET_MOVIETICKETS':
            //cambiamos el valor de la propiedad post  
            return { ...state, movieTickets: action.payload };

        default:
            return { ...state };
    }
}