import React, { ReactElement } from 'react';

import styles from './Page.module.css';

type PropsType = {
    page: number;
    currentPage: number;
    onPageChanged: (totalUsersCount: number) => void;
};

export const Page = ({ page, currentPage, onPageChanged }: PropsType): ReactElement => {
    const onPageClickHandler = (): void => {
        onPageChanged(page);
    };

    return (
        <span
            className={`${currentPage === page ? styles.selectedPage : styles.page}`}
            onClick={onPageClickHandler}
        >
            {page}
        </span>
    );
};
