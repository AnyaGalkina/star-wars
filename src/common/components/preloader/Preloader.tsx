import React, { ReactElement } from 'react';

import preloader from '../../assets/images/spoilers_drib.gif';

export const Preloader = (): ReactElement => {
    return (
        <div>
            <h2>Loading...</h2>
            <img src={preloader} alt="preloader" />
        </div>
    );
};
