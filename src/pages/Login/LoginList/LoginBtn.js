import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './loginList.module.scss';

function LoginBtn({ icon, text, onclick }) {
    return (
        <li>
            <div className={clsx(styles.listBtnItem)} onClick={onclick}>
                <span className={clsx(styles.listBtnIcon)}>{icon}</span>
                <span className={clsx(styles.listBtnTitle)}>{text}</span>
            </div>
        </li>
    );
}

export default LoginBtn;

LoginBtn.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    onclick: PropTypes.func,
};
