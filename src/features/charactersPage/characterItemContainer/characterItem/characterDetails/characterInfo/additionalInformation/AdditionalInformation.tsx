import React, { ReactElement } from 'react';

type PropsType = {
    details: string;
    title: string;
};

export const AdditionalInformation = ({ title, details}: PropsType): ReactElement | null => {
    if (details === 'n/a') {
        return null;
    }

    return (
        <div>
            {title} {details}
        </div>
    );
};
