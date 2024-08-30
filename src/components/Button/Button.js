import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Button.module.scss';

function Button({
    to,
    href,
    className,
    children,
    primary = false,
    nDefault = false,
    iconLeft,
    iconRight,
    onClick,
    ...props
}) {
    const classButton = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.default]: nDefault,
        [className]: className,
    });
    // Change btn style
    let Btn = 'button';
    if (to) {
        Btn = Link;
    } else if (href) {
        Btn = 'a';
    }

    // Pass props to btn component
    const passProps = {
        to,
        href,
        onClick,
        ...props,
    };

    return (
        <Btn className={classButton} {...passProps}>
            {iconLeft && <span className={clsx(styles.icLeft)}>{iconLeft}</span>}
            {children}
            {iconRight && <span className={clsx(styles.icRight)}>{iconRight}</span>}
        </Btn>
    );
}

export default Button;
