import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

function SuggestedAccounts({ label, data = [] }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.label)}>{label}</p>
            {data.map((item, i) => (
                <AccountItem key={item.id} data={item} />
            ))}
            <p className={clsx(styles.btnMore)}>See all</p>
        </div>
    );
}

export default SuggestedAccounts;

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
    data: PropTypes.array,
};
