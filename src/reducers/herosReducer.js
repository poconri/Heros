import { getSuperHeroService } from "../services/superHeroesService";
import { SET_HEROS, SET_FAVORITE, SEARCH, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER } from "../actions/type";

const initialState = {
    list: [],
    listB: [],
    error: '',
    loading: false,
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
                    hero.id === action.payload.id ? { ...hero, isFavorite: !hero.isFavorite } : hero)
            };
        case SEARCH:
            const filteredHeroes = state.list.filter(hero =>
                hero.name.toLowerCase().includes(action.payload.toLowerCase()));
                console.log(filteredHeroes);
                console.log('state liust',filteredHeroes);
                return {
                  ...state,
                  filteredHeroes,
                  //listB: savedPokemons
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