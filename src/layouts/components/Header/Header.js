import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import Search from '~/layouts/components/Search';
import Button from '~/components/Button';
import config from '~/config';
import MoreMenu from '~/layouts/components/MoreMenu';
import Image from '~/components/Image';
import { UploadIcon, MessageIcon, InboxIcon, Logo } from '~/assets/icon';

function Header() {
    // User
    const CurrentUser = false;

    // Set active MoreMenu item
    const [activeMenu, setActiveMenu] = useState('light');
    // Set Theme dark || light
    const getTheme = JSON.parse(localStorage.getItem('theme'));
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'theme':
                localStorage.setItem('theme', JSON.stringify(menuItem.code));
                setActiveMenu(menuItem.code);
                break;

            default:
                break;
        }
    };
    console.log(getTheme);

    useEffect(() => {
        document.body.className = getTheme === 'light' || getTheme === null ? 'light-theme' : 'dark-theme';
    }, [getTheme]);
    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.container)}>
                <div className={clsx(styles.logo)}>
                    <Link to={config.router.home}>
                        <Logo width="118" height="42" />
                    </Link>
                </div>
                <Search />
                <div className={clsx(styles.action)}>
                    {CurrentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                                <div className={clsx(styles.userCloud, styles.userIcon)}>
                                    <UploadIcon />
                                </div>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Send" placement="bottom">
                                <div className={clsx(styles.userPlane, styles.userIcon)}>
                                    <MessageIcon />
                                </div>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <div className={clsx(styles.userMessage, styles.userIcon)}>
                                    <InboxIcon />
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
                                <Image src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png" alt="avatar" />
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
