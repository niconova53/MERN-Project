import {
    MOSTRAR_CIUDADES,
    MOSTRAR_CIUDAD,
    FILTRO
} from '../types';

const initialState = {
    ciudades: [],
    visibleCiudades: [],
    searchValue: '',
}

export default function (state = initialState, action) {
    switch (action.type) {

        case MOSTRAR_CIUDADES:
            return {
                ...state,
                ciudades: action.payload
            }

        case MOSTRAR_CIUDAD:
            return {
                ...state,
                ciudad: action.payload
            }
        case FILTRO:
            const { searchValue } = action;
            const searchValueLowercase = searchValue.toLowerCase();
            const visibleCiudades = searchValue
                ? state.ciudades.filter((p) => p.ciudad.toLowerCase().includes(searchValueLowercase))
                //|| p.origin.toLowerCase().includes(searchValueLowercase))
                : state.ciudades;
            return {
                ...state,
                searchValue,
                visibleCiudades
            };
        default:
            return state;
    }
}
