import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './AccountSearch.module.scss';
import Image from '~/components/Image';
function AccountSearch({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={clsx(styles.wrapper)}>
            <Image src={data.avatar} alt={data.full_name} className={clsx(styles.avatar)} />
            <div className={clsx(styles.info)}>
                <div className={clsx(styles.username)}>
                    {data.nickname}
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
                </div>
                <div className={clsx(styles.nickname)}>{data.full_name}</div>
            </div>
        </Link>
    );
}

export default AccountSearch;

AccountSearch.propTypes = {
    data: PropTypes.object.isRequired,
};
