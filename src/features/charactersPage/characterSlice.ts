import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {setAppError, setAppStatus} from '../../app/appSlice';
import {RootState} from '../../app/store';

import {charactersAPI, CharacterType, ParamsType} from './charactersAPI';

export type InitialStateType = typeof initialState;

const initialState = {
    charactersOnPage: [] as CharacterType[],
    prevCharactersOnPage: [] as CharacterType[],
    count: 0,
    character: {} as CharacterType,
    pageSize: 10,
    currentPage: 1,
    sortBy: 'eye_color',
};

export const getCharacters = createAsyncThunk('characters/getCharacters', async (_, {dispatch, getState}) => {
        dispatch(setAppStatus('loading'));

        const state = getState() as RootState;
        const {currentPage} = state.characters;
        const params: ParamsType = {};

        if (currentPage) {
            params.page = currentPage.toString();
        }

        try {
            const response = await charactersAPI.getCharacters(params);

            dispatch(
                setCharacters({
                    characters: response.data.results,
                    count: response.data.count,
                }),
            );
        } catch (e: any) {
            dispatch(setAppError('Some error occurred'));
        } finally {
            dispatch(setAppStatus('idle'));
        }
    },
);

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters(
            state: InitialStateType,
            action: PayloadAction<{ characters: CharacterType[]; count: number }>,
        ) {
            state.count = action.payload.count;
            state.charactersOnPage = action.payload.characters;
            state.prevCharactersOnPage = state.charactersOnPage;
        },
        setCharacter(state: InitialStateType, action: PayloadAction<CharacterType>) {
            state.character = action.payload;
        },
        setPage(state: InitialStateType, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        sortCharacters(state: InitialStateType, action: PayloadAction<string>) {
            const sortBy = state.sortBy;
            debugger

            if (action.payload === 'All') {
                if (state.prevCharactersOnPage.length > 0) {
                    state.charactersOnPage = state.prevCharactersOnPage;
                }
            } else {
                state.charactersOnPage = state.prevCharactersOnPage.filter(
                    // @ts-ignore
                    character => character[sortBy] === action.payload,
                );
            }
        },
    },
});

export const charactersReducer = charactersSlice.reducer;
export const {setCharacters, setCharacter, setPage, sortCharacters} = charactersSlice.actions;
