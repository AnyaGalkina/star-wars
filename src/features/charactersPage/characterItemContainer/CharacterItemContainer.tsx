import React, { ReactElement } from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { CharacterType } from '../charactersAPI';
import { setCharacter } from '../characterSlice';

import { CharacterItem } from './characterItem/CharacterItem';

type PropsType = {
    character: CharacterType;
    setIsOpen: (open: boolean) => void;
};

export const CharacterItemContainer = ({
    character,
    setIsOpen,
}: PropsType): ReactElement => {
    const dispatch = useAppDispatch();
    const onCharacterClick = (): void => {
        // @ts-ignore
        dispatch(setCharacter(character));
        setIsOpen(true);
    };

    return <CharacterItem character={character} onCharacterClick={onCharacterClick} />;
};
