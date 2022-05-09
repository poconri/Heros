import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import {IHero, CompleteState} from '../../interface/interface';

export const getHeroes = createAsyncThunk(
    'heroes/getHeroes',
    async () => {
        return fetch(`https://akabab.github.io/superhero-api/api/all.json`).then(res =>
            res.json()
      )
});

const HeroesSlice = createSlice({
    name: 'heroes',
    initialState: {
        listA: [],
        listB: [],
        loading:false,
        error: '',
        favorites:[],
        rowsAmount: 0,
        windowWidth: 0
    } as CompleteState,
    reducers: {
        search: (state:CompleteState, action:PayloadAction<string>) => {
            let filteredHeroes = state.listB;
            if(action.payload){
                filteredHeroes = filteredHeroes.filter(hero => hero.name.toLowerCase().includes(action.payload.toLowerCase()) || hero.biography.fullName.toLowerCase().includes(action.payload.toLowerCase()));
            }
            return {
                ...state,
                listA: filteredHeroes,
            }
        },
        setFavorite: (state:CompleteState, action:PayloadAction<IHero>) => {
            let newFavoriteHeroes = state.favorites.includes(action.payload.id) ? state.favorites.filter(id => id !== action.payload.id) : [...state.favorites, action.payload.id];
            const stringifiedFavorites = JSON.stringify(newFavoriteHeroes);
            localStorage.setItem('HEROES_V1', stringifiedFavorites);
            return {
                ...state,
                favorites: state.favorites.includes(action.payload.id) ? state.favorites.filter(id => id !== action.payload.id) : [...state.favorites, action.payload.id],
                listA: state.listA.map(hero =>
                    hero.id === action.payload.id ? {...hero, isFavorite: !hero.isFavorite } : hero),
                listB: state.listB.map(hero =>
                    hero.id === action.payload.id ? {...hero, isFavorite: !hero.isFavorite } : hero )
                    
            }
        }
    },
    extraReducers:{
        [getHeroes.pending.type]: ( state ) =>{
            state.listA = [];
            state.listB = [];
            state.loading = true;
        },
        [getHeroes.fulfilled.type]: (state, action) => {
            const LocalStorageHeroes = localStorage.getItem('HEROES_V1');
            let parsedHeroes:number[];
            if(!LocalStorageHeroes){
                localStorage.setItem('HEROES_V1', JSON.stringify([]));
                parsedHeroes = [];
            } else {
                parsedHeroes = JSON.parse(LocalStorageHeroes);
            }
            console.log(parsedHeroes);
            let favoriteHeroes:IHero[] = action.payload.map((heroe: IHero ) => {
                if(parsedHeroes.includes(heroe.id)){
                    return {
                        ...heroe,
                        isFavorite: true
                }
            } else {
                return {
                    ...heroe,
                    isFavorite: false
                }
            }
            });
            state.listA = [...favoriteHeroes];
            state.listB = [...favoriteHeroes];
            state.favorites = parsedHeroes;
            state.loading = false;
        
        },
        [getHeroes.rejected.type]: (state, action ) => {
            state.error = action.error.message;
            state.loading = false;
        }
    },
})

export const {search, setFavorite } = HeroesSlice.actions;

export default HeroesSlice.reducer;
