import React, { ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { ROUTES } from '../../enums/routes-enum';

import styles from './Header.module.css';

const navItems = [
    { id: '1', title: 'Home', path: ROUTES.HOME },
    { id: '2', title: 'Characters', path: ROUTES.CHARACTERS },
];

export const Header = (): ReactElement => {
    return (
        <div className={styles.headerContainer}>
            <div>
                <img src={logo} className={styles.logo} alt="logo" />
            </div>
            <nav>
                {navItems.map(({ id, title, path }) => {
                    return (
                        <NavLink
                            key={id}
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? `${styles.activeLink} ${styles.link}`
                                    : styles.link
                            }
                        >
                            {' '}
                            {title}
                        </NavLink>
                    );
                })}
            </nav>
        </div>
    );
};
