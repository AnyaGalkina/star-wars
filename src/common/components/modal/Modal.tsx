import React, { memo, ReactNode } from 'react';

import styles from './Modal.module.css';

type PropsType = {
    setIsOpen: (open: boolean) => void;
    children: ReactNode;
    isOpen: boolean;
};

export const Modal = memo(({ setIsOpen, isOpen, children }: PropsType) => {
    if (!isOpen) {
        return null;
    }

    const onCloseClick = (): void => {
        setIsOpen(false);
    };

    return (
        <>
            <div className={styles.modalContainer} onClick={onCloseClick} />
            <div>{children}</div>
        </>
    );
});
