import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';
import images from '~/assets/images';
import { PopperWrapper } from '~/components/Popper';
import AccountSearch from '~/layouts/components/AccountSearch';

function Search() {
    const [searchResults, showSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // showSearchResults([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <TippyHeadless
            visible={searchResults.length > 0}
            interactive={true}
            placement="bottom"
            render={(attrs) => (
                <div className={clsx(styles.searchResult)} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <p className={clsx(styles.searchTitle)}>Accounts</p>
                        <AccountSearch />
                        <AccountSearch />
                        <AccountSearch />
                    </PopperWrapper>
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
