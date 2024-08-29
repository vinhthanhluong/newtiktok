import clsx from 'clsx';

import styles from './Button.module.scss';

function Button() {
    return <button className={clsx(styles.btn)}>Button</button>;
}

export default Button;
