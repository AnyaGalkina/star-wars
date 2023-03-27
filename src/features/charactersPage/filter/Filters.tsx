import React, { ReactElement, memo } from 'react';

import styles from './Filter.module.css';
import { ValueSelect } from './valueSelect/ValueSelect';

export const Filters = memo((): ReactElement => {
    return (
        <div className={styles.filtersContainer}>
            <span>eye color </span>
            <ValueSelect />
        </div>
    );
});
