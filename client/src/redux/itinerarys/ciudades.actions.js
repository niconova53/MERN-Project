import {
    MOSTRAR_CIUDADES,
    MOSTRAR_CIUDAD,
    FILTRO
} from '../types';

import axios from 'axios';

export const mostrarCiudades = () => async dispatch => {
    const respuesta = await axios.get('http://localHost:4000/api/cities');
    dispatch({
        type: MOSTRAR_CIUDADES,
        payload: respuesta.data
    })
}

export const mostrarCiudad = id => async dispatch => {
    const respuesta = await axios.get(`http://localHost:4000/api/cities/city/${id}`);
    dispatch({
        type: MOSTRAR_CIUDAD,
        payload: respuesta.data
    })
}

export const filtro = (searchValue) => {
    return {
        type: FILTRO,
        searchValue
    };
};
