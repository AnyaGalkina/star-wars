import React from 'react';
import styles from './SizeItem.module.css';

type PropsType = {
    sizeParam: string;
    sizeTitle: string;
    classNameWrapper?: string;
}


export const SizeItem = ({sizeParam, sizeTitle, classNameWrapper}: PropsType) => {

    if (sizeParam === 'unknown') {
        return null
    }

    return (
        <div className={classNameWrapper}>
            <div className={styles.sizeItemContainer}>
                <div className={styles.sizeParamBlock}>{sizeParam}</div>
                <div className={styles.title}>{sizeTitle}</div>
            </div>
        </div>
    );
};
