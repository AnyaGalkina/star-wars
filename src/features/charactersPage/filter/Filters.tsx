import React, { ReactElement } from 'react';

import styles from './Filter.module.css';
import { ValueSelect } from './valueSelect/ValueSelect';

export const Filters = (): ReactElement => {
    return (
        <div className={styles.filtersContainer}>
            <span>eye color </span>
            <ValueSelect />
        </div>
    );
};
