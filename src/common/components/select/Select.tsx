import React, { ChangeEvent, ReactElement } from 'react';

import { useAppDispatch } from '../../../app/hooks';

import styles from './Select.module.css';

type PropsType = {
    options: any[];
    onChangeOption: (option: string) => void;
    setSort: (option: string) => void;
};

export const Select = ({ options, onChangeOption, setSort }: PropsType): ReactElement => {
    const dispatch = useAppDispatch();

    const onOptionChange = (event: ChangeEvent<HTMLSelectElement>): void => {
        onChangeOption(event.target.value);
        // @ts-ignore
        dispatch(setSort(event.target.value));
    };

    return (
        <select className={styles.select} onChange={onOptionChange}>
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
