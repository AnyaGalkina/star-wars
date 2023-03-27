import React, { ReactElement } from 'react';

import { CharacterType } from '../../../charactersAPI';

import styles from './CharacterDetails.module.css';
import { CharacterImage } from './characterImage/CharacterImage';
import { CharacterInfo } from './characterInfo/CharacterInfo';

type PropsType = {
    character: CharacterType;
    setIsOpen: (open: boolean) => void;
};

export const CharacterDetails = ({ character, setIsOpen }: PropsType): ReactElement => {
    const { name, height, mass, gender, birth_year, eye_color, hair_color, skin_color } =
        character;

    const onCloseClick = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.modalContainer}>
            <div className={styles.closeBlock}>
                <div className={styles.invisibleBlock} />
                <button
                    type="button"
                    className={styles.closeButton}
                    onClick={onCloseClick}
                >
                    X
                </button>
            </div>

            <div className={styles.characterDetailsContainer}>
                <CharacterImage gender={gender} birthYear={birth_year} />
                <CharacterInfo
                    name={name}
                    eyeColor={eye_color}
                    skinColor={skin_color}
                    mass={mass}
                    height={height}
                    hairColor={hair_color}
                />
            </div>
        </div>
    );
};
