import React, { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import img404 from '../../assets/images/404.png';
import deathStar from '../../assets/images/deathStar.png';
import { ROUTES } from '../../enums/routes-enum';
import { Button } from '../button/Button';

import styles from './PageNotFound.module.css';

export const PageNotFound = (): ReactElement => {
    const navigate = useNavigate();

    const onReturnClick = (): void => {
        navigate(ROUTES.HOME);
    };

    return (
        <div className={styles.pageNotFoundContainer}>
            <div className={styles.imageBlock}>
                <img src={img404} alt="page not found" className={styles.img404} />
                <img src={deathStar} alt="death star" className={styles.imgPlanet} />
            </div>
            <div>
                <Button
                    additionalStyle={styles.button}
                    title="Return"
                    onClick={onReturnClick}
                />
            </div>
        </div>
    );
};
