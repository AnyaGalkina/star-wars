import React, { ReactElement } from 'react';

import styles from '../ColoredBlock.module.css';

type PropsType = {
    birthYear: string;
};

export const BirthYearBlock = ({ birthYear }: PropsType): ReactElement | null => {
    if (birthYear === 'unknown') {
        return null;
    }

    return <div className={`${styles.coloredBlock} ${styles.birthDay}`}>{birthYear}</div>;
};
