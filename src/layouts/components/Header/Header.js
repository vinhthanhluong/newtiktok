import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Search from '~/layouts/components/Search';
import Button from '~/components/Button';
import config from '~/config';

function Header() {
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
                    <div className={clsx(styles.icDot)}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
