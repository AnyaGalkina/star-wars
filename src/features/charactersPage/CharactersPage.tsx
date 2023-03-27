import React, { ReactElement, useEffect, useState } from 'react';

import { getAppError, getAppStatus } from '../../app/appSelectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Header, Modal, Pagination, Preloader } from '../../common';
import { ErrorMessage } from '../../common/components/errorMessage/ErrorMessage';

import { CharacterDetails, CharacterItemContainer } from './characterItemContainer';
import {
    getCharacter,
    getCharactersOnPage,
    getCurrentPage,
    getTotalCount,
} from './characterSelectors';
import { getCharacters, setPage } from './characterSlice';
import styles from './CharactersPage.module.css';
import { Filters } from './filter/Filters';

export const CharactersPage = (): ReactElement => {
    const dispatch = useAppDispatch();

    const count = useAppSelector(getTotalCount);
    const appStatus = useAppSelector(getAppStatus);
    const appError = useAppSelector(getAppError);
    const characters = useAppSelector(getCharactersOnPage);
    const character = useAppSelector(getCharacter);
    const currentPage = useAppSelector(getCurrentPage);

    const [isOpen, setIsOpen] = useState(false);

    const onPageChanged = (pageNumber: number): void => {
        // @ts-ignore
        dispatch(setPage(pageNumber));
    };

    useEffect(() => {
        // @ts-ignore
        dispatch(getCharacters());
    }, [currentPage]);

    return (
        <div>
            <Header />
            {appError && <ErrorMessage />}
            {appStatus === 'loading' ? (
                <Preloader />
            ) : (
                <>
                    <h2 className={styles.charactersPageHeader}>
                        {count} <strong>Peoples</strong> for you to choose your favorite
                    </h2>
                    <Filters />

                    <div className={styles.charactersContainer}>
                        {characters.length
                            ? characters.map(character => {
                                  return (
                                      <CharacterItemContainer
                                          setIsOpen={setIsOpen}
                                          key={character.url}
                                          character={character}
                                      />
                                  );
                              })
                            : ''}
                    </div>

                    <Pagination onPageChanged={onPageChanged} />

                    <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
                        <CharacterDetails character={character} setIsOpen={setIsOpen} />
                    </Modal>
                </>
            )}
        </div>
    );
};
