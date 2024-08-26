import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';
import images from '~/assets/images';

function Search() {
    return (
        <TippyHeadless
            visible
            interactive={true}
            placement="bottom"
            render={(attrs) => (
                <div className={clsx(styles.searchResult)} tabIndex="-1" {...attrs}>
                    My tippy box
                </div>
            )}
        >
            <div className={clsx(styles.wrapper)}>
                <input type="text" placeholder="Search..." className={clsx(styles.ipt)} />
                <button className={clsx(styles.clearn)}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <span className={clsx(styles.loading)}>
                    <FontAwesomeIcon icon={faSpinner} />
                </span>
                <button className={clsx(styles.btn)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
