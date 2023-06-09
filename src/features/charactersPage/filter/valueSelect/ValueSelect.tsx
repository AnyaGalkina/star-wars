import React, { memo, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { Select} from '../../../../common';
import { getPrevCharactersOnPage } from '../../characterSelectors';
import { sortCharacters } from '../../characterSlice';

export const ValueSelect = memo(() => {
    const characters = useAppSelector(getPrevCharactersOnPage);
    const dispatch = useAppDispatch();

    const [value, onChangeOption] = useState('');
    const allValues: string[] = ['All'];

    for (let i = 0; i < characters.length; i++) {
        allValues.push(characters[i].eye_color);
    }

    const options = Array.from(new Set([...allValues]));

    const setSort = (value: string): void => {
        dispatch(sortCharacters(value));
    }


    return (
        <Select options={options} onChangeOption={onChangeOption} setSort={setSort}/>
    );
});
