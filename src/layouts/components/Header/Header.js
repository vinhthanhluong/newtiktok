import clsx from 'clsx';
import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAmerica,
    faEllipsisVertical,
    faKeyboard,
    faLightbulb,
    faMoon,
    faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/layouts/components/Search';
import Button from '~/components/Button';
import config from '~/config';
import MoreMenu from '~/layouts/components/MoreMenu';

const MENU_MORES = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmerica} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tiếng việt',
                },
                {
                    code: 'ja',
                    title: 'Japanese',
                },
                {
                    code: 'cn',
                    title: 'Chinese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Dark more',
        children: {
            title: 'Dark mode',
            data: [
                {
                    type: 'theme',
                    code: 'light',
                    title: 'Light mode',
                    icon: <FontAwesomeIcon icon={faLightbulb} />,
                },
                {
                    type: 'theme',
                    code: 'dark',
                    title: 'Dark mode',
                    icon: <FontAwesomeIcon icon={faMoon} />,
                },
            ],
        },
    },
];

function Header() {
    // Set active MoreMenu item
    const [activeMenu, setActiveMenu] = useState('light');
    // Set Theme dark || light
    const [theme, setTheme] = useState('light');
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'theme':
                setTheme(menuItem.code);
                setActiveMenu(menuItem.code);
                break;

            default:
                break;
        }
    };

    useEffect(() => {
        document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
    }, [theme]);
    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.logo)}>
                    <Link to={config.router.home}>
                        <img src={images.logo} alt="Logo" />
                    </Link>
                </div>
                <Search />
                <div className={clsx(styles.action)}>
                    <Button to={config.router.login} primary iconLeft={<FontAwesomeIcon icon={faRightToBracket} />}>
                        Log in
                    </Button>
                    <Button
                        to={config.router.login}
                        primary
                        outline
                        iconLeft={<FontAwesomeIcon icon={faRightToBracket} />}
                    >
                        Register
                    </Button>
                    <MoreMenu items={MENU_MORES} onChange={handleMenuChange} activeTheme={activeMenu}>
                        <div className={clsx(styles.btnMore)}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </MoreMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
