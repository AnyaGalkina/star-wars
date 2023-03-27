import { RootState } from '../../app/store';

import { CharacterType } from './charactersAPI';
import { LanguageType } from './characterSlice';

export const getLanguageFormat = (state: RootState): LanguageType =>
    state.characters.format;
export const getCharactersOnPage = (state: RootState): CharacterType[] =>
    state.characters.charactersOnPage;
export const getPrevCharactersOnPage = (state: RootState): CharacterType[] => state.characters.prevCharactersOnPage;
export const getCharacter = (state: RootState): CharacterType =>
    state.characters.character;
export const getTotalCount = (state: RootState): number => state.characters.count;
export const getCurrentPage = (state: RootState): number => state.characters.currentPage;
export const getPageSize = (state: RootState): number => state.characters.pageSize;
