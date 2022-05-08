import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
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
        listaB: [],
        loading:false,
        error: '',
        favorites:[],
        rowsAmount: 0,
        windowWidth: 0
    } as CompleteState,
    reducers: {},
    extraReducers:{}
})

export default HeroesSlice.reducer;
