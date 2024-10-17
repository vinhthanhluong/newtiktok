import { useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './MfooterSidebar.module.scss';
import config from '~/config';

function MfooterSidebar() {
    const data = config.jsonMenuFooterSideBar;
    // const itemRef = useRef();
    // const handleClick = () => {
    //     const itemRefCurrent = itemRef.current.parentElement;

    //     itemRefCurrent.classList.add(clsx(styles.item, styles.active));
    //     console.log(itemRefCurrent);
    //     // itemRefCurrent.className = clsx(styles.title);
    // };\

    const renderData = () => {};
    return (
        <div className={clsx(styles.wrapper)}>
            {data.map((item, index) => {
                console.log(item.children);
                return (
                    <div className={clsx(styles.item)} key={index}>
                        <p className={clsx(styles.title)}>{item.title}</p>
                        <ul className={clsx(styles.sub)}>
                            <li>
                                <a href="#">asda</a>
                            </li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default MfooterSidebar;
