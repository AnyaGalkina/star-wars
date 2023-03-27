import React, { memo, useState } from 'react';

import { useAppSelector } from '../../../../app/hooks';
import { Select } from '../../../../common';
import { getPrevCharactersOnPage } from '../../characterSelectors';
import { sortCharacters } from '../../characterSlice';

export const ValueSelect = memo(() => {
    const characters = useAppSelector(getPrevCharactersOnPage);

    const [value, onChangeOption] = useState('');
    const allValues: string[] = ['All'];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < characters.length; i++) {
        allValues.push(characters[i].eye_color);
    }

    const options = Array.from(new Set([...allValues]));

    return (
        <Select
            options={options}
            onChangeOption={onChangeOption}
            setSort={sortCharacters}
        />
    );
});
