import React from 'react';

type PropsType = {
    details: string;
    title: string;
}

export const AdditionalInformation = ({title, details}: PropsType) => {
    if (details === 'n/a') {
        return null
    }

    return (
        <div>
            {title} {details}
        </div>
    );
};
