import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './HeaderOnly.module.scss';
import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            {/* noneSidebar */}
            <main className={clsx(styles.main)}>
                <div className={clsx(styles.content)}> {children}</div>
            </main>
        </div>
    );
}

export default HeaderOnly;

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};
