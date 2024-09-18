import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './Popper.module.scss';

function Popper({ children }) {
    return <div className={clsx(styles.wrapper)}>{children}</div>;
}

export default Popper;

Popper.propTypes = {
    children: PropTypes.node.isRequired,
};
