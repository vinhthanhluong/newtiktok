import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './SuggestedAccounts.module.scss';
import Image from '~/components/Image';
import { PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import config from '~/config';

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={clsx(styles.accountPopup)} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={clsx(styles.accPopupContent)}>
                        <div className={clsx(styles.accPopupHead)}>
                            <p className={clsx(styles.accPopupImg)}>
                                <Image src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png" alt="" />
                            </p>
                            <Button primary to={config.router.following} className={clsx(styles.accPopupBtn)}>
                                Follow
                            </Button>
                        </div>
                        <div className={clsx(styles.accPopupInfo)}>
                            <p className={clsx(styles.accPopupNickname)}>
                                theanh28entertainment
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </p>
                            <p className={clsx(styles.accPopupName)}>Theanh28 Entertainment</p>
                        </div>
                        <div className={clsx(styles.accPopupAct)}>
                            <p className={clsx(styles.accPopupActNumber)}>6.7M</p>
                            <p className={clsx(styles.accPopupActText)}>Followers</p>
                            <p className={clsx(styles.accPopupActNumber)}>429.9M</p>
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
                        <Image src="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png" alt="" />
                    </p>
                    <div className={clsx(styles.accountTxt)}>
                        <p className={clsx(styles.accountNickname)}>
                            theanh28entertainment
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </p>
                        <p className={clsx(styles.accountName)}>Theanh28 Entertainment</p>
                    </div>
                    <a className={clsx(styles.accountLink)}></a>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default AccountItem;
