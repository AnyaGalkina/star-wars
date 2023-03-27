import React, { ReactElement } from 'react';

import icon from '../../../../../../common/assets/images/icon.png';
import iconFemale from '../../../../../../common/assets/images/iconFemale.png';
import iconMale from '../../../../../../common/assets/images/iconMale.png';
import { ColoredBlock } from '../../coloredBlock/ColoredBlock';

import styles from './CharacterImage.module.css';

type PropsType = {
    gender: string;
    birthYear: string;
};

export const CharacterImage = ({ gender, birthYear }: PropsType): ReactElement => {
    const srcPath = gender === 'male' ? iconMale : gender === 'female' ? iconFemale : icon;

    return (
        <div className={styles.imageContainer}>
            <img src={srcPath} alt="character gender" className={styles.img} />

            <div className={styles.coloredBlock}>
                <ColoredBlock gender={gender} birthYear={birthYear} />
            </div>
        </div>
    );
};
