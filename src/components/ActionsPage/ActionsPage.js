import { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Button from '../Button';
import styles from './actionsPage.module.scss';
import { ToTopIcon, CloseIcon, ComputerIcon, PCIcon } from '~/assets/icon';

function ActionsPage({ totop }) {
    const [showBox, setShowBox] = useState(false);

    const handleClose = () => setShowBox(false);

    const handleToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={clsx(styles.wrapper)}>
            {totop ? (
                <p className={clsx(styles.toTop)} onClick={handleToTop}>
                    <ToTopIcon />
                </p>
            ) : (
                <div className={clsx(styles.getapp)}>
                    <Button className={clsx(styles.btn)} onClick={() => setShowBox(true)}>
                        Get app
                    </Button>
                    {showBox && (
                        <div className={clsx(styles.getappBox)}>
                            <div className={clsx(styles.getappClose)} onClick={handleClose}>
                                <CloseIcon />
                            </div>
                            <div className={clsx(styles.getappText)}>
                                <ComputerIcon />
                                <p>Get Tiktok for desktop</p>
                            </div>
                            <div className={clsx(styles.getappText)}>
                                <PCIcon />
                                <p>Get TikTok App</p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ActionsPage;

ActionsPage.propTypes = {
    totop: PropTypes.bool,
};
