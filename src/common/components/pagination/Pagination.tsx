import React, { ReactElement } from 'react';

import { useAppSelector } from '../../../app/hooks';
import {
    getCurrentPage,
    getPageSize,
    getTotalCount,
} from '../../../features/charactersPage/characterSelectors';

import { Page } from './page/Page';

type PropsType = {
    onPageChanged: (pageNumber: number) => void;
};

export const Pagination = ({ onPageChanged }: PropsType): ReactElement => {
    const pageSize = useAppSelector(getPageSize);
    const currentPage = useAppSelector(getCurrentPage);
    const totalItemsCount = useAppSelector(getTotalCount);

    const pagesCount = Math.ceil(totalItemsCount / pageSize);

    const pages: Array<number> = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div style={{ marginBottom: '50px' }}>
            {pages.map(p => {
                return (
                    <Page
                        key={p}
                        page={p}
                        onPageChanged={onPageChanged}
                        currentPage={currentPage}
                    />
                );
            })}
        </div>
    );
};
