import { instance } from '../../api/config';

export type ParamsType = {
    format?: string;
    page?: string;
};

export const charactersAPI = {
    getCharacters(params: ParamsType) {
        return instance.get<CharactersResponseType>('', { params });
    },
};

export type CharactersResponseType = {
    count: number;
    next: string;
    previous?: string | null;
    results: CharacterType[];
};

export type CharacterType = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: any[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
};
