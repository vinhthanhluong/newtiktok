import clsx from 'clsx';
import { useState, useEffect } from 'react';

import styles from './notify.module.scss';
import { UserNotify } from '~/components/Stone';

function Notify() {
    const { infoNotify } = UserNotify();

    const [isNotify, setIsNotify] = useState(infoNotify.isNotify);

    const [isEndAnimate, setIsEndAnimate] = useState(false);

    useEffect(() => {
        setIsNotify(infoNotify.isNotify);
        setIsEndAnimate(false);

        let timeoutEndAnimate = setTimeout(() => {
            setIsEndAnimate(true);
        }, infoNotify.delay);

        return () => {
            clearTimeout(timeoutEndAnimate);
        };
    }, [infoNotify]);

    return (
        <>
            {isNotify && (
                <div
                    className={clsx(styles.wrapper, {
                        [styles.hidden]: isEndAnimate,
                        [styles.success]: infoNotify.success,
                        [styles.error]: infoNotify.error,
                    })}
                    onAnimationEnd={isEndAnimate ? setIsNotify(false) : null}
                >
                    <p className={clsx(styles.title)}>{infoNotify.content}</p>
                </div>
            )}
        </>
    );
}

export default Notify;
