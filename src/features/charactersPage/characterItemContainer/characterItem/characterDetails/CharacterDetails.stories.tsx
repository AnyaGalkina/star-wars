import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CharacterDetails } from './CharacterDetails';

const characterWithAllData = {
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
const characterWithOutMass = {
    name: 'Han Solo',
    height: '180',
    mass: 'unknown',
    hair_color: 'brown',
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
    url: '2',
};
const characterWithOutGenderAndBirthYear = {
    name: ' Yoda',
    height: '100',
    mass: '50',
    hair_color: 'blond',
    skin_color: 'grey',
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
    url: '3',
};

export default {
    title: 'Example/Character Details Modal',
    component: CharacterDetails,
    argTypes: {
        setIsOpen: { action: 'clicked on close' },
    },
} as ComponentMeta<typeof CharacterDetails>;

const Template: ComponentStory<typeof CharacterDetails> = args => (
    <CharacterDetails {...args} />
);

export const WithAllData = Template.bind({});
WithAllData.args = {
    character: characterWithAllData,
};

export const WithOutMass = Template.bind({});
WithOutMass.args = {
    character: characterWithOutMass,
};

export const WithOutGenderAndBirthYear = Template.bind({});
WithOutGenderAndBirthYear.args = {
    character: characterWithOutGenderAndBirthYear,
};
