import axios from "axios";
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_GENRES = 'GET_GENRES';
export const GET_GAME = 'GET_GAME';
export const FILTER = 'FILTER';
export const CLEAR_GAME = 'CLEAR_GAME';
export const DELETE_GAME = 'DELETE_GAME';
export const SEARCH_VIDEOGAME = 'SEARCH_VIDEOGAME';
export const ALL_GAMES = 'ALL_GAMES'
const baseUrl = 'https://servidor-juegos.onrender.com';

export const allGames = () => (dispatch) => {
    return dispatch({ type: ALL_GAMES })
}

export const getVideogames = () => async (dispatch) => {
    return await axios.get(`${baseUrl}/videogames`)
        .then(array => dispatch({ type: GET_VIDEOGAMES, payload: array.data }))
}

export const getGenres = () => async (dispatch) => {
    return await axios.get(`${baseUrl}/genres`)
        .then(arrayGenres => dispatch({ type: GET_GENRES, payload: arrayGenres.data.sort((ant, next) => ant.localeCompare(next)) }))
}

export const getGame = (id) => async (dispatch) => {
    return await axios.get(`${baseUrl}/videogames/${id}`)
        .then(juego => dispatch({ type: GET_GAME, payload: juego.data }))
}

export const createGame = (obj) => async () => {
    await axios.post(`${baseUrl}/videogames`, obj)
}

export const buscarJuegos = (query) => async (dispatch) => {
    return await axios.get(`${baseUrl}/videogames?name=${query}`)
        .then(arrayJuegos => dispatch({ type: SEARCH_VIDEOGAME, payload: arrayJuegos.data }))
}


export const eliminarJuego = (id) => async (dispatch) => {
    return await axios.delete(`${baseUrl}/videogames/${id}`)
        .then(arrayNuevo => dispatch({ type: DELETE_GAME, payload: arrayNuevo.data })).then(() => dispatch(getVideogames()))
}

export const filtrar = (arr) => (dispatch) => {
    return dispatch({ type: FILTER, payload: arr })
}

export const clearGame = () => (dispatch) => {
    return dispatch({ type: CLEAR_GAME, payload: {} })
}
