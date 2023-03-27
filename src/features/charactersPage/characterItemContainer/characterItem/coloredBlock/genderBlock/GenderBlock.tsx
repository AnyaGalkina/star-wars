import React, { ReactElement } from 'react';

import styles from '../ColoredBlock.module.css';

type PropsType = {
    gender: string;
};

export const GenderBlock = ({ gender }: PropsType): ReactElement | null => {
    const genderStyle = `${styles.coloredBlock} ${
        // eslint-disable-next-line no-nested-ternary
        gender === 'male'
            ? styles.male
            : gender === 'female'
            ? styles.female
            : styles.hermaphrodite
    }`;

    if (gender === 'n/a') {
        return null;
    }

    return <div className={genderStyle}>{gender}</div>;
};
