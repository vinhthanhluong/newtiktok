import clsx from 'clsx';
import PropTypes from 'prop-types';

import style from './MenuSidebar.module.scss';

function MenuSidebar({ children }) {
    return <nav className={clsx(style.MenuSidebar)}>{children}</nav>;
}

export default MenuSidebar;

MenuSidebar.protoType = {
    children: PropTypes.node.isRequired,
};
