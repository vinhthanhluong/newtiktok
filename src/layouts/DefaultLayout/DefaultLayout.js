import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import Auth from '~/components/Auth';
import { UserAuth } from '~/components/Stone';
import Notify from '~/components/Notify';
import FullScreen from '~/layouts/FullScreen';

function DefaultLayout({ children }) {
    const { openAuth, openFullScreen } = UserAuth();
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <main className={clsx(styles.main)}>
                <Sidebar />
                <div className={clsx(styles.content)}>{children}</div>
            </main>

            {openAuth && <Auth />}
            {openFullScreen && <FullScreen />}
            <Notify />
        </div>
    );
}

export default DefaultLayout;

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
