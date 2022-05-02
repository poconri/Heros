import { SET_HEROS, SET_ERROR, TOGGLE_LOADER, SET_FAVORITE, SEARCH, RESET_HEROS } from "./type";
import { getSuperHeroService } from "../services/superHeroesService";

export const setHeros = (payload) => ({
    type: SET_HEROS,
    payload,
});

export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
});

export const toggleLoader = (payload) => ({
    type: TOGGLE_LOADER,
    payload,
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload,
});

export const search = (payload) => ({
    type: SEARCH,
    payload,
});

export const fetchHeros = () => async (dispatch) => {
    try {
        dispatch(toggleLoader());
        const response = await getSuperHeroService();
        const herosFavorite = response.map(hero => ({
            ...hero,
            isFavorite: false
        }));
        dispatch(setHeros(herosFavorite));
        dispatch(toggleLoader());
    } catch (error) {
        dispatch(setError({ message: "Oops! Something went wrong.", error }));
        dispatch(toggleLoader());
    }
};