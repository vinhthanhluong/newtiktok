import { useState } from 'react';
import clsx from 'clsx';

import styles from './MfooterSidebar.module.scss';
import config from '~/config';
import MfooterSidebarItem from './MfooterSidebarItem';

function MfooterSidebar() {
    const data = config.jsonMenuFooterSideBar;
    const [subItem, setSubItem] = useState(false);
    // const [activeClass, setActiveClass] = useState(false);

    const handleClick = (e) => {
        const nextElement = e.target.nextElementSibling;
        if (nextElement.style.display === 'flex') {
            nextElement.style.display = 'none';
        } else {
            nextElement.style.display = 'flex';
        }

        // const classItem = clsx(styles.active);
        const parentElement = e.target.parentElement;
        parentElement.classList.toggle('active');
    };

    const renderData = () => {};
    return (
        <div className={clsx(styles.wrapper)}>
            {data.map((item, index) => {
                return (
                    <div className={clsx(styles.item)} key={index}>
                        <p className={clsx(styles.title)} onClick={(e) => handleClick(e)}>
                            {item.title}
                        </p>
                        <ul className={clsx(styles.sub)}>
                            {item.children.map((itm, idx) => (
                                <MfooterSidebarItem key={idx} data={itm} />
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

export default MfooterSidebar;
