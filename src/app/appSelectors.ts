import { AppStatusType, Nullable } from './appSlice';
import { RootState } from './store';

export const getAppStatus = (state: RootState): AppStatusType => state.app.appStatus;
export const getAppError = (state: RootState): Nullable<string> => state.app.appError;
