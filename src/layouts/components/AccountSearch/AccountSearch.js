import clsx from 'clsx';

import styles from './AccountSearch.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
function AccountSearch() {
    return (
        <div className={clsx(styles.wrapper)}>
            <img src={images.noImg} alt="avatar" className={clsx(styles.avatar)} />
            <div className={clsx(styles.info)}>
                <div className={clsx(styles.username)}>
                    Username
                    <FontAwesomeIcon icon={faCircleCheck} />
                </div>
                <div className={clsx(styles.nickname)}>nickname</div>
            </div>
        </div>
    );
}

export default AccountSearch;
