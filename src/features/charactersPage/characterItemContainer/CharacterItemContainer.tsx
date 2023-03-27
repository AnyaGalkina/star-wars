import React, {ReactElement, memo, useCallback} from 'react';

import { useAppDispatch } from '../../../app/hooks';
import { CharacterType } from '../charactersAPI';
import { setCharacter } from '../characterSlice';

import { CharacterItem } from './characterItem/CharacterItem';

type PropsType = {
    character: CharacterType;
    setIsOpen: (open: boolean) => void;
};

export const CharacterItemContainer = memo(({ character, setIsOpen}: PropsType): ReactElement => {
    const dispatch = useAppDispatch();
    const onCharacterClick = useCallback((): void => {
        dispatch(setCharacter(character));
        setIsOpen(true);
    }, [character]);

    return <CharacterItem character={character} onCharacterClick={onCharacterClick} />;
});
