import { getSuperHeroService } from "../services/superHeroesService";
import { SET_HEROS, SET_FAVORITE, SEARCH, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER, RESET_HEROS } from "../actions/type";

const initialState = {
    list: [],
    listB: [],
    error: '',
    loading: false,
    favorites: []
};

const herosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEROS:
            return {
                ...state,
                list: action.payload,
                listB: action.payload,
            };
        case SET_FAVORITE:
            return {
                ...state,
                list: state.list.map(hero =>
                    hero.id === action.payload.id ? { ...hero, isFavorite: !hero.isFavorite } : hero),
                listB: state.listB.map(hero =>
                    hero.id === action.payload.id ? { ...hero, isFavorite: !hero.isFavorite } : hero),
                favorites: state.favorites.includes(action.payload.id) ? state.favorites.filter(id => id !== action.payload.id) : [...state.favorites, action.payload.id]
            };
        case SEARCH:
            let filteredHeroes = {list: state.listB};
            filteredHeroes = filteredHeroes.list.filter(hero =>
                hero.name.toLowerCase().includes(action.payload.toLowerCase()));

                return {
                  ...state,
                  list: filteredHeroes,
                };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload.message
            };
        case CLEAR_ERROR:
            return {
                ...state,
                error: ''
            };
        case TOGGLE_LOADER:
            return {
                ...state,
                loading: !state.loading
            };
        default:
            return {...state};
    }
}

export default herosReducer;