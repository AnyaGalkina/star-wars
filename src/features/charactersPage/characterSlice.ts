import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setAppError, setAppStatus } from '../../app/appSlice';
import { RootState } from '../../app/store';

import { charactersAPI, CharacterType, ParamsType } from './charactersAPI';

export type LanguageType = '' | 'wookiee';
export type InitialStateType = typeof initialState;

const initialState = {
    charactersOnPage: [] as CharacterType[],
    prevCharactersOnPage: [] as CharacterType[],
    count: 0,
    format: '' as LanguageType,
    character: {} as CharacterType,
    pageSize: 10,
    currentPage: 1,
};

// @ts-ignore
export const getCharacters = createAsyncThunk(
    'characters/getCharacters',
    async (_, { dispatch, getState }) => {
        // @ts-ignore
        dispatch(setAppStatus('loading'));

        const state = getState() as RootState;
        const { format, currentPage } = state.characters;
        const params: ParamsType = {};

        if (format) {
            params.format = format;
        }
        if (currentPage) {
            params.page = currentPage.toString();
        }

        try {
            const response = await charactersAPI.getCharacters(params);

            // @ts-ignore
            dispatch(
                setCharacters({
                    characters: response.data.results,
                    count: response.data.count,
                }),
            );
        } catch (e: any) {
            // @ts-ignore
            dispatch(setAppError('Some error occurred'));
        } finally {
            // @ts-ignore
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
        setLanguage(state: InitialStateType, action: PayloadAction<LanguageType>) {
            state.format = action.payload;
        },
        setCharacter(state: InitialStateType, action: PayloadAction<CharacterType>) {
            state.character = action.payload;
        },
        setPage(state: InitialStateType, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        sortCharacters(state: InitialStateType, action: PayloadAction<string>) {
            const sortBy = 'eye_color';

            if (action.payload === 'All') {
                if (state.prevCharactersOnPage.length > 0) {
                    state.charactersOnPage = state.prevCharactersOnPage;
                }
            } else {
                const sortedCharacters = state.prevCharactersOnPage.filter(
                    character => character[sortBy] === action.payload,
                );

                state.charactersOnPage = sortedCharacters;
            }
        },
    },
});

export const charactersReducer = charactersSlice.reducer;
export const { setCharacters, setLanguage, setCharacter, setPage, sortCharacters } =
    charactersSlice.actions;
