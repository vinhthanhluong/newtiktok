import clsx from 'clsx';
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
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
                </div>
                <div className={clsx(styles.nickname)}>{data.nickname}</div>
            </div>
        </Link>
    );
}

export default AccountSearch;
