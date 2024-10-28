import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import { PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import config from '~/config';

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div className={clsx(styles.accountPopup)} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={clsx(styles.accPopupContent)}>
                        <div className={clsx(styles.accPopupHead)}>
                            <p className={clsx(styles.accPopupImg)}>
                                <Image src={data.avatar} alt={data.nickname} />
                            </p>
                            <Button primary to={config.router.following} className={clsx(styles.accPopupBtn)}>
                                Follow
                            </Button>
                        </div>
                        <div className={clsx(styles.accPopupInfo)}>
                            <p className={clsx(styles.accPopupNickname)}>
                                {data.nickname}
                                {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
                            </p>
                            <p className={clsx(styles.accPopupName)}>{`${data.first_name} ${data.last_name}`}</p>
                        </div>
                        <div className={clsx(styles.accPopupAct)}>
                            <p className={clsx(styles.accPopupActNumber)}>{data.followers_count}</p>
                            <p className={clsx(styles.accPopupActText)}>Followers</p>
                            <p className={clsx(styles.accPopupActNumber)}>{data.likes_count}</p>
                            <p className={clsx(styles.accPopupActText)}>Likes</p>
                        </div>
                    </div>
                </PopperWrapper>
            </div>
        );
    };

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div className={clsx(styles.accountItemWrap)}>
            <TippyHeadless
                // visible
                interactive={true}
                placement="bottom-end"
                delay={[600, 0]}
                offset={[0, 10]}
                render={renderPreview}
            >
                <div className={clsx(styles.accountItem)}>
                    <p className={clsx(styles.accountImg)}>
                        <Image src={data.avatar} alt={data.nickname} />
                    </p>
                    <div className={clsx(styles.accountTxt)}>
                        <p className={clsx(styles.accountNickname)}>
                            {data.nickname}
                            {data.tick && <FontAwesomeIcon icon={faCircleCheck} />}
                        </p>
                        <p className={clsx(styles.accountName)}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                    <a className={clsx(styles.accountLink)}></a>
                </div>
            </TippyHeadless>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
