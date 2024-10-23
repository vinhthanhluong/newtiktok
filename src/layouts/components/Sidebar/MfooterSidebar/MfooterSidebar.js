import { useState } from 'react';
import clsx from 'clsx';

import styles from './MfooterSidebar.module.scss';
import config from '~/config';
import MfooterSidebarItem from './MfooterSidebarItem';

function MfooterSidebar() {
    const data = config.jsonMenuFooterSideBar;
    const [activeItem, setActiveItem] = useState(null);
    const handleClick = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };

    return (
        <div className={clsx(styles.wrapper)}>
            {data.map((item, index) => {
                return (
                    <div className={clsx(styles.item)} key={index}>
                        <p className={clsx(styles.title)} onClick={() => handleClick(index)}>
                            {item.title}
                        </p>
                        {activeItem === index && (
                            <ul className={clsx(styles.sub)}>
                                {item.children.map((itm, idx) => (
                                    <MfooterSidebarItem key={idx} data={itm} />
                                ))}
                            </ul>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default MfooterSidebar;
