import React, { ReactElement, memo } from 'react';

import styles from './SizeItem.module.css';

type PropsType = {
    sizeParam: string;
    sizeTitle: string;
    classNameWrapper?: string;
};

export const SizeItem = memo(({ sizeParam, sizeTitle, classNameWrapper }: PropsType): ReactElement | null => {
    if (sizeParam === 'unknown') {
        return null;
    }

    return (
        <div className={classNameWrapper}>
            <div className={styles.sizeItemContainer}>
                <div className={styles.sizeParamBlock}>{sizeParam}</div>
                <div className={styles.title}>{sizeTitle}</div>
            </div>
        </div>
    );
});
