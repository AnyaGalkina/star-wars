import React, { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import { ROUTES, Header, Button } from '../../common';
import yoda from '../../common/assets/images/yoda.png';

import styles from './HomePage.module.css';

export const HomePage = (): ReactElement => {
    const navigate = useNavigate();

    const onSeeMoreClick = (): void => {
        navigate(ROUTES.CHARACTERS);
    };

    return (
        <div>
            <Header />
            <div className={styles.homePageContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.mainHeader}>
                        <strong>Find </strong>
                        <span>all your favorite </span>
                        <strong>character</strong>
                    </h1>
                    <div className={styles.smallText}>
                        <span>
                            You can find out all the information about your favorite
                            character
                        </span>
                    </div>
                    <Button
                        title="See more ..."
                        onClick={onSeeMoreClick}
                        additionalStyle={styles.button}
                    />
                </div>
                <div className={styles.banner}>
                    <img src={yoda} alt="banner Yoda in cloud" className={styles.img} />
                </div>
            </div>
        </div>
    );
};
