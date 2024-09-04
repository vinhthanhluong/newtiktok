import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCloudArrowUp,
    faEllipsisVertical,
    faMessage,
    faPaperPlane,
    faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/layouts/components/Search';
import Button from '~/components/Button';
import config from '~/config';
import MoreMenu from '~/layouts/components/MoreMenu';

function Header() {
    // User
    const CurrentUser = true;

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
                    {CurrentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                                <div className={clsx(styles.userCloud, styles.userIcon)}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </div>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Send" placement="bottom">
                                <div className={clsx(styles.userPlane, styles.userIcon)}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </div>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <div className={clsx(styles.userMessage, styles.userIcon)}>
                                    <FontAwesomeIcon icon={faMessage} />
                                    <span>99+</span>
                                </div>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                to={config.router.login}
                                primary
                                iconLeft={<FontAwesomeIcon icon={faRightToBracket} />}
                            >
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
                        </>
                    )}

                    <MoreMenu
                        items={CurrentUser ? config.jsonMoreMenuUser : config.jsonMoreMenu}
                        onChange={handleMenuChange}
                        activeTheme={activeMenu}
                    >
                        {CurrentUser ? (
                            <div className={clsx(styles.userAvatar)}>
                                <img src={images.noImg} alt="avatar" />
                            </div>
                        ) : (
                            <div className={clsx(styles.btnMore)}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        )}
                    </MoreMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
