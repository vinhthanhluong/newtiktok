import clsx from 'clsx';
import { Link } from 'react-router-dom';

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
                    <Button />
                    <div className="icDot"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
