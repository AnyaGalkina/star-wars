import React from 'react';

import styles from './Button.module.css';

type PropsType = {
    disabled?: boolean;
    title: string;
    onClick: () => void;
    additionalStyle?: string;
};

export const Button = ({ onClick, additionalStyle, disabled, title }: PropsType) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.button} ${additionalStyle && additionalStyle}`}
            disabled={disabled}
        >
            {title}
        </button>
    );
};
