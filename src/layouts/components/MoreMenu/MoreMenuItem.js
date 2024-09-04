import { memo } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './MoreMenu.module.scss';

function MoreMenuItem({ data, onClick, active }) {
    let Comp = 'p';

    if (data.to) {
        Comp = Link;
    }

    return (
        <li>
            <Comp to={data.to} className={clsx(styles.MoreBtn, { [styles.active]: active })} onClick={onClick}>
                {data.icon && <span className={clsx(styles.icLeft)}>{data.icon}</span>}
                {data.title}
            </Comp>
        </li>
    );
}

export default memo(MoreMenuItem);
