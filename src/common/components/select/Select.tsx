import React, { ChangeEvent, ReactElement } from 'react';

import styles from './Select.module.css';

type PropsType = {
    options: any[];
    onChangeOption: (option: any) => void;
    setSort: (option: string) => void;
};

export const Select = ({ options, onChangeOption, setSort }: PropsType): ReactElement => {

    const onChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        onChangeOption(event.target.value);
        setSort(event.target.value);
    };

    return (
        <select className={styles.select} onChange={onChange}>
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
