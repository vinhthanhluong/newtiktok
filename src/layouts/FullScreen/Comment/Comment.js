import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBookmark, faCommentDots } from '@fortawesome/free-solid-svg-icons';

import { MusicIcon, CodeIcon, FacebookIcon, ShareIcon, TwitterIcon2, WhatsAppIcon } from '~/assets/icon';
import Button from '~/components/Button';
import styles from './Comment.module.scss';

function Comment() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.header)}>
                <div className={clsx(styles.info)}>
                    <div className={clsx(styles.infoUser)}>
                        <div className={clsx(styles.user)}>
                            <a className={clsx(styles.nickname)} href="#">
                                thang1211
                            </a>
                            <p className={clsx(styles.username)}>
                                Thắng dz Nguyễn
                                <span> · </span>
                                <span className={clsx(styles.time)}>2024-06-13</span>
                            </p>
                        </div>
                        <Button>Following</Button>
                    </div>
                    <p className={clsx(styles.infoDesc)}>Download.mp4</p>
                    <div className={clsx(styles.infoMusic)}>
                        <MusicIcon />
                        Original sound - thang1211
                    </div>
                </div>
                <div className={clsx(styles.action)}>
                    <div className={clsx(styles.handle)}>
                        <div className={clsx(styles.actionBtn)}>
                            <Button>
                                <FontAwesomeIcon icon={faHeart} />
                            </Button>
                            <span className={clsx(styles.actionBtn_tt)}>14</span>
                        </div>
                        <div className={clsx(styles.actionBtn)}>
                            <Button>
                                <FontAwesomeIcon icon={faCommentDots} />
                            </Button>
                            <span className={clsx(styles.actionBtn_tt)}>31</span>
                        </div>
                        <div className={clsx(styles.actionBtn)}>
                            <Button>
                                <FontAwesomeIcon icon={faBookmark} />
                            </Button>
                            <span className={clsx(styles.actionBtn_tt)}>10</span>
                        </div>
                    </div>
                    <div className={clsx(styles.social)}>
                        <p className={clsx(styles.socialItem)}>
                            <a href="#">
                                <CodeIcon />
                            </a>
                        </p>
                        <p className={clsx(styles.socialItem)}>
                            <a href="#">
                                <ShareIcon />
                            </a>
                        </p>
                        <p className={clsx(styles.socialItem)}>
                            <a href="#">
                                <FacebookIcon />
                            </a>
                        </p>
                        <p className={clsx(styles.socialItem)}>
                            <a href="#">
                                <WhatsAppIcon />
                            </a>
                        </p>
                        <p className={clsx(styles.socialItem)}>
                            <a href="#">
                                <TwitterIcon2 />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
