import axios from "axios";
export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const GET_GENRES = 'GET_GENRES';
export const GET_GAME = 'GET_GAME';
export const FILTER = 'FILTER';
export const CLEAR_GAME = 'CLEAR_GAME';
export const DELETE_GAME = 'DELETE_GAME';
export const SEARCH_VIDEOGAME = 'SEARCH_VIDEOGAME';
export const ALL_GAMES = 'ALL_GAMES';
const baseUrl = 'http://ec2-18-228-232-214.sa-east-1.compute.amazonaws.com:3001';

export const allGames = () => (dispatch) => {
    return dispatch({ type: ALL_GAMES })
}

export const getVideogames = () => async (dispatch) => {
    return await axios.get(`${baseUrl}/videogames`, { headers: { "Accept-Encoding": "gzip,deflate,compress" }, })
        .then(array => dispatch({ type: GET_VIDEOGAMES, payload: array.data }))
}

export const getGenres = () => async (dispatch) => {
    return await axios.get(`${baseUrl}/genres`, { headers: { "Accept-Encoding": "gzip,deflate,compress" }, })
        .then(arrayGenres => dispatch({ type: GET_GENRES, payload: arrayGenres.data.sort((ant, next) => ant.localeCompare(next)) }))
}

export const getGame = (id) => async (dispatch) => {
    return await axios.get(`${baseUrl}/videogames/${id}`, { headers: { "Accept-Encoding": "gzip,deflate,compress" }, })
        .then(juego => dispatch({ type: GET_GAME, payload: juego.data }))
}

export const createGame = (obj) => async () => {
    await axios.post(`${baseUrl}/videogames`, obj)
}

export const buscarJuegos = (query) => async (dispatch) => {
    return await axios.get(`${baseUrl}/videogames?name=${query}`, { headers: { "Accept-Encoding": "gzip,deflate,compress" }, })
        .then(arrayJuegos => dispatch({ type: SEARCH_VIDEOGAME, payload: arrayJuegos.data }))
}


export const eliminarJuego = (id) => async (dispatch) => {
    return await axios.delete(`${baseUrl}/videogames/${id}`, { headers: { "Accept-Encoding": "gzip,deflate,compress" }, })
        .then(arrayNuevo => dispatch({ type: DELETE_GAME, payload: arrayNuevo.data })).then(() => dispatch(getVideogames()))
}

export const filtrar = (arr) => (dispatch) => {
    return dispatch({ type: FILTER, payload: arr })
}

export const clearGame = () => (dispatch) => {
    return dispatch({ type: CLEAR_GAME, payload: {} })
}
