import { CharacterType } from './charactersAPI';
import {
    charactersReducer,
    InitialStateType,
    setCharacter,
    setCharacters,
    setPage,
    sortCharacters,
} from './characterSlice';

let initialState = {} as InitialStateType;

beforeEach(() => {
    initialState = {
        charactersOnPage: [],
        prevCharactersOnPage: [],
        count: 0,
        format: '',
        character: {} as CharacterType,
        pageSize: 10,
        currentPage: 1,
    };
});

test('current page should be changed to 2', () => {
    // @ts-ignore
    const newState = charactersReducer(initialState, setPage(2));

    expect(newState.currentPage).toBe(2);
});

test('character shoud be set', () => {
    const newCharacter = {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        hair_color: 'brown',
        skin_color: 'blue',
        eye_color: 'blue',
        birth_year: '123BY',
        gender: 'female',
        homeworld: '',
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: '',
        edited: '',
        url: '1',
    };
    // @ts-ignore
    const newState = charactersReducer(initialState, setCharacter(newCharacter));

    expect(newState.character.name).toBe('Leia Organa');
});

test('characters should be set', () => {
    const characters = [
        {
            name: 'Leia Organa',
            height: '150',
            mass: '49',
            hair_color: 'brown',
            skin_color: 'blue',
            eye_color: 'blue',
            birth_year: '123BY',
            gender: 'female',
            homeworld: '',
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            created: '',
            edited: '',
            url: '1',
        },
        {
            name: 'Han Solo',
            height: '180',
            mass: 'unknown',
            hair_color: 'blond',
            skin_color: 'blue',
            eye_color: 'grey',
            birth_year: '123BY',
            gender: 'male',
            homeworld: '',
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            created: '',
            edited: '',
            url: '1',
        },
        {
            name: ' Yoda',
            height: '100',
            mass: '50',
            hair_color: 'blond',
            skin_color: 'blue',
            eye_color: 'grey',
            birth_year: 'unknown',
            gender: 'n/a',
            homeworld: '',
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            created: '',
            edited: '',
            url: '1',
        },
    ];
    // @ts-ignore
    const newState = charactersReducer(
        initialState,
        setCharacters({ characters, count: 10 }),
    );

    expect(newState.charactersOnPage.length).toBe(3);
    expect(newState.prevCharactersOnPage.length).toBe(3);
    expect(newState.count).toBe(10);
});

test('characters on page should be sorted by eye_color', () => {
    initialState = {
        charactersOnPage: [
            {
                name: 'Leia Organa',
                height: '150',
                mass: '49',
                hair_color: 'brown',
                skin_color: 'blue',
                eye_color: 'blue',
                birth_year: '123BY',
                gender: 'female',
                homeworld: '',
                films: [],
                species: [],
                vehicles: [],
                starships: [],
                created: '',
                edited: '',
                url: '1',
            },
            {
                name: 'Han Solo',
                height: '180',
                mass: 'unknown',
                hair_color: 'blond',
                skin_color: 'blue',
                eye_color: 'grey',
                birth_year: '123BY',
                gender: 'male',
                homeworld: '',
                films: [],
                species: [],
                vehicles: [],
                starships: [],
                created: '',
                edited: '',
                url: '1',
            },
            {
                name: ' Yoda',
                height: '100',
                mass: '50',
                hair_color: 'blond',
                skin_color: 'blue',
                eye_color: 'grey',
                birth_year: 'unknown',
                gender: 'n/a',
                homeworld: '',
                films: [],
                species: [],
                vehicles: [],
                starships: [],
                created: '',
                edited: '',
                url: '1',
            },
        ],
        prevCharactersOnPage: [
            {
                name: 'Leia Organa',
                height: '150',
                mass: '49',
                hair_color: 'brown',
                skin_color: 'blue',
                eye_color: 'blue',
                birth_year: '123BY',
                gender: 'female',
                homeworld: '',
                films: [],
                species: [],
                vehicles: [],
                starships: [],
                created: '',
                edited: '',
                url: '1',
            },
            {
                name: 'Han Solo',
                height: '180',
                mass: 'unknown',
                hair_color: 'blond',
                skin_color: 'blue',
                eye_color: 'grey',
                birth_year: '123BY',
                gender: 'male',
                homeworld: '',
                films: [],
                species: [],
                vehicles: [],
                starships: [],
                created: '',
                edited: '',
                url: '1',
            },
            {
                name: ' Yoda',
                height: '100',
                mass: '50',
                hair_color: 'blond',
                skin_color: 'blue',
                eye_color: 'grey',
                birth_year: 'unknown',
                gender: 'n/a',
                homeworld: '',
                films: [],
                species: [],
                vehicles: [],
                starships: [],
                created: '',
                edited: '',
                url: '1',
            },
        ],
        count: 3,
        format: '',
        character: {} as CharacterType,
        pageSize: 10,
        currentPage: 1,
    };
    // @ts-ignore
    const newState = charactersReducer(initialState, sortCharacters('grey'));

    expect(newState.charactersOnPage.length).toBe(2);
    expect(newState.prevCharactersOnPage.length).toBe(3);
});
