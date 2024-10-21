import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MfooterSidebarItem({ data, ...props }) {
    let Comp = 'a';
    if (data.to) {
        Comp = Link;
    }

    const passProps = {
        to: data.to,
        href: data.href,
        target: data.target,
        ...props,
    };

    return (
        <li>
            <Comp {...passProps}>{data.title}</Comp>
        </li>
    );
}

export default MfooterSidebarItem;

MfooterSidebarItem.protoType = {
    data: PropTypes.object.isRequired,
};
