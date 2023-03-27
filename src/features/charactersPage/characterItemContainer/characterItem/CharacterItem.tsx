import React, { memo } from 'react';

import { CharacterType } from '../../charactersAPI';

import styles from './CharacterItem.module.css';
import { ColoredBlock } from './coloredBlock/ColoredBlock';
import { SizeItem } from './sizeItem/SizeItem';

type PropsType = {
    character: CharacterType;
    onCharacterClick: () => void;
};

export const CharacterItem = memo(({ character, onCharacterClick }: PropsType) => {
    const { name, height, mass, gender, birth_year } = character;

    return (
        <div onClick={onCharacterClick} className={styles.itemBlock}>
            <h3 className={styles.itemHeader}>
                {name}
            </h3>
            <div className={styles.flexBlock}>
                <SizeItem sizeParam={height} sizeTitle="height" />
                <SizeItem sizeParam={mass} sizeTitle="mass" />
            </div>
            <ColoredBlock gender={gender} birthYear={birth_year} />
        </div>
    );
});
