import LazyLoad from 'react-lazyload';
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
import { UserAuth } from '~/components/Stone';

function Header() {
    // UserGoogle
    // const { userGoogle } = UserAuth();
    // const CurrentUser = !!userGoogle;

    // User Width Default
    const { userAuthDefault, userToken, setOpenAuth, setLoginTab } = UserAuth();

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
            case 'logout':
                setOpenAuth(true);
                setLoginTab('logout');
                break;

            default:
                break;
        }
    };

    useEffect(() => {
        document.body.className = getTheme === 'light' || getTheme === null ? 'light-theme' : 'dark-theme';
    }, [getTheme]);

    const handleLogin = () => {
        setOpenAuth(true);
    };

    return (
        <>
            <header className={clsx(styles.wrapper)}>
                <div className={clsx(styles.container)}>
                    <div className={clsx(styles.logo)}>
                        <Link to={config.router.home}>
                            <Logo width="118" height="42" />
                        </Link>
                    </div>
                    <Search />
                    <div className={clsx(styles.action)}>
                        {userAuthDefault && userToken ? (
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
                                    primary
                                    iconLeft={<FontAwesomeIcon icon={faRightToBracket} />}
                                    onClick={handleLogin}
                                >
                                    Log in
                                </Button>
                            </>
                        )}

                        <MoreMenu
                            items={userAuthDefault && userToken ? config.jsonMoreMenuUser : config.jsonMoreMenu}
                            onChange={handleMenuChange}
                            activeTheme={activeMenu}
                        >
                            {userAuthDefault && userToken ? (
                                <div className={clsx(styles.userAvatar)}>
                                    <LazyLoad height="100%">
                                        <Image src={userAuthDefault.avatar} alt={userAuthDefault.nickname} />
                                    </LazyLoad>
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
        </>
    );
}

export default Header;
