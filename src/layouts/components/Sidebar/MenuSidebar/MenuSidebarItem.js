import clsx from 'clsx';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import styles from './MenuSidebar.module.scss';

function MenuSidebarItem({ title, to, icon }) {
    return (
        <NavLink to={to} className={(nav) => clsx(styles.menuItem, { [styles.active]: nav.isActive })}>
            {icon}
            <span className={clsx(styles.menuTitle)}>{title}</span>
        </NavLink>
    );
}

export default MenuSidebarItem;

MenuSidebarItem.protoType = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
