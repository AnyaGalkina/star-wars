import React from 'react';

import { SizeItem } from '../../sizeItem/SizeItem';

import { AdditionalInformation } from './additionalInformation/AdditionalInformation';
import styles from './CharacterInfo.module.css';

type PropsType = {
    skinColor: string;
    eyeColor: string;
    hairColor: string;
    name: string;
    height: string;
    mass: string;
};

export const CharacterInfo = ({
    skinColor,
    hairColor,
    eyeColor,
    name,
    height,
    mass,
}: PropsType) => {
    return (
        <div className={styles.dataBlock}>
            <h3 className={styles.name}>{name}</h3>

            <div className={styles.additionalInformation}>
                <AdditionalInformation title="hair color: " details={hairColor} />
                <AdditionalInformation title="skin color: " details={skinColor} />
                <AdditionalInformation title="eye color: " details={eyeColor} />
            </div>

            <div className={styles.sizeBlock}>
                <SizeItem
                    sizeParam={height}
                    sizeTitle="height"
                    classNameWrapper={styles.size}
                />
                <SizeItem
                    sizeParam={mass}
                    sizeTitle="mass"
                    classNameWrapper={styles.size}
                />
            </div>
        </div>
    );
};
