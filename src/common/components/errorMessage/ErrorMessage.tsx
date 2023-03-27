import React, { ReactElement } from 'react';

import { getAppError } from '../../../app/appSelectors';
import { setAppError } from '../../../app/appSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { Button } from '../button/Button';

import styles from './ErrorMessage.module.css';

export const ErrorMessage = (): ReactElement => {
    const dispatch = useAppDispatch();
    const globalError = useAppSelector(getAppError);

    const onErrorCloseClick = () => {
        dispatch(setAppError(null));
    }

    return (
        <div className={styles.errorBlock}>
            <div>
                <span>{globalError}</span>
            </div>
            <Button
                additionalStyle={styles.button}
                onClick={onErrorCloseClick}
                title="X"
            />
        </div>
    );
};
