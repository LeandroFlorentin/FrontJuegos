import { useDispatch, useSelector } from 'react-redux';
import { getVideogames, getGenres } from '../../redux/actions'
import { useEffect } from 'react';
import VideoGames from '../Videogames/Videogames.js'

const VideogamesContainer = () => {
    const dispatch = useDispatch()
    const { videoGames, videoGamesActu } = useSelector(state => state)
    useEffect(() => {
        if (videoGames.length === videoGamesActu.length) {
            dispatch(getVideogames())
            dispatch(getGenres())
        }
    }, [])
    return (
        <VideoGames />
    )
}

export default VideogamesContainer;