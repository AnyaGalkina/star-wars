import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AppStatusType = 'idle' | 'loading';
export type Nullable<T> = T | null;
export type InitialStateType = typeof initialState;

export const initialState = {
    appStatus: 'idle' as AppStatusType,
    appError: null as Nullable<string>,
};

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppStatus(state, action: PayloadAction<AppStatusType>) {
            state.appStatus = action.payload;
        },
        setAppError(state, action: PayloadAction<Nullable<string>>) {
            state.appError = action.payload;
        },
    },
});

export const appReducer = slice.reducer;
export const { setAppError, setAppStatus } = slice.actions;
