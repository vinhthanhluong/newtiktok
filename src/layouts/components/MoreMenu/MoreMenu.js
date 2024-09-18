import { useState, useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './MoreMenu.module.scss';
import MoreMenuItem from './MoreMenuItem';
import MoreLabel from './MoreLabel';

function MoreMenu({ children, items = [], onChange, activeTheme }) {
    // show MoreMenu
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];

    const renderItems = () => {
        return currentMenu.data.map((item, index) => {
            return (
                <MoreMenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        const isChildren = !!item.children;
                        const isTo = !!item.to;
                        if (isChildren) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                        if (!isTo) {
                            onChange(item);
                        }
                        // if (item.type) {
                        //     onChange(item);
                        // }
                    }}
                    active={item.code === activeTheme}
                ></MoreMenuItem>
            );
        });
    };

    // Back MoreMenu
    const HandleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    return (
        <TippyHeadless
            // visible
            delay={[0, 800]}
            onHide={() => (history.length > 1 ? HandleBack() : '')}
            interactive={true}
            hideOnClick={false}
            placement="bottom-end"
            render={(attrs) => (
                <div className={clsx(styles.content)} tabIndex="-1" {...attrs}>
                    <div className={clsx(styles.wrapper)}>
                        {history.length > 1 && <MoreLabel title={currentMenu.title} onBack={() => HandleBack()} />}
                        <ul>{renderItems()}</ul>
                    </div>
                </div>
            )}
        >
            {children}
        </TippyHeadless>
    );
}

export default MoreMenu;

MoreMenu.propTypes = {
    children: PropTypes.node,
    items: PropTypes.array,
    onChange: PropTypes.func,
    activeTheme: PropTypes.string,
};
