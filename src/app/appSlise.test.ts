import { appReducer, InitialStateType, setAppError, setAppStatus } from './appSlice';

let initialState = {} as InitialStateType;

beforeEach(() => {
    initialState = {
        appStatus: 'idle',
        appError: null,
    };
});

test('app status should be changed to loading', () => {

    const newState = appReducer(initialState, setAppStatus('loading'));

    expect(newState.appStatus).toBe('loading');
});

test('app error should be changed', () => {

    const newState = appReducer(initialState, setAppError('Some error'));

    expect(newState.appError).toBe('Some error');
});
