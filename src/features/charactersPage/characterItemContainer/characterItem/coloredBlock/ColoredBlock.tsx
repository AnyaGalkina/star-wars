import React, { ReactElement } from 'react';

import styles from '../CharacterItem.module.css';

import { BirthYearBlock } from './birthYearBlock/BirthYearBlock';
import { GenderBlock } from './genderBlock/GenderBlock';

type PropsType = {
    gender: string;
    birthYear: string;
};

export const ColoredBlock = ({ gender, birthYear }: PropsType): ReactElement => {
    return (
        <div className={styles.flexBlock}>
            <GenderBlock gender={gender} />
            <BirthYearBlock birthYear={birthYear} />
        </div>
    );
};
