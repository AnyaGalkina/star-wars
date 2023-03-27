import React, { ReactElement } from 'react';

import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTES, PageNotFound } from './common';
import { HomePage, CharactersPage } from './features';

const App = (): ReactElement => {
    return (
        <div className="App">
            <div>
                <Routes>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.CHARACTERS} element={<CharactersPage />} />
                    <Route path={ROUTES.PAGE_NOT_FOUND} element={<PageNotFound />} />
                    <Route path="*" element={<Navigate to={ROUTES.PAGE_NOT_FOUND} />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
