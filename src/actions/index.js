import { SET_HEROS, SET_ERROR, TOGGLE_LOADER } from "./type";
import { getSuperHeroService } from "../services/superHeroesService";

export const setHeros = (payload) => ({
    type: SET_HEROS,
    payload,
});

export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
});

export const toggleFavorite = (payload) => ({
    type: TOGGLE_LOADER,
    payload,
});


export const fetchHeros = () => async (dispatch) => {
    try {
        dispatch(toggleFavorite());
        const response = await getSuperHeroService();
        const herosFavorite = response.map(hero => ({
            ...hero,
            isFavorite: false
        }));
        dispatch(setHeros(herosFavorite));
        dispatch(toggleFavorite());
    } catch (error) {
        dispatch(setError({ message: "Oops! Something went wrong.", error }));
        dispatch(toggleFavorite());
    }
};