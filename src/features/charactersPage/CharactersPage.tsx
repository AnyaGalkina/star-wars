import React, {ReactElement, useEffect, useState} from 'react';

import { getAppStatus } from '../../app/appSelectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Header, Modal, Pagination, Preloader } from '../../common';

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
    const characters = useAppSelector(getCharactersOnPage);
    const character = useAppSelector(getCharacter);
    const currentPage = useAppSelector(getCurrentPage);

    const [isOpen, setIsOpen] = useState(false);

    const onPageChanged = (pageNumber: number): void => {
        dispatch(setPage(pageNumber));
    };

    useEffect(() => {
        dispatch(getCharacters());
    }, [currentPage]);

    return (
        <div>
            <Header />
            {appStatus === 'loading' ? (
                <Preloader />
            ) : (
                <>
                    {/* <LanguageSwitcher/> */}

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
