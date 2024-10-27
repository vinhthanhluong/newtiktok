import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Search.module.scss';
import { PopperWrapper } from '~/components/Popper';
import AccountSearch from '~/layouts/components/AccountSearch';
import { useDebounce } from '~/hook';
import * as searchServices from '~/services/searchServices';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 400);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounce); //type:less
            setSearchResults(result);
            setLoading(false);
        };
        fetchApi();
    }, [debounce]);
    const handleClear = () => {
        setSearchValue('');
        setSearchResults([]);
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <TippyHeadless
                visible={showResult && searchResults.length > 0}
                interactive={true}
                placement="bottom"
                onClickOutside={() => handleClear()}
                render={(attrs) => (
                    <div className={clsx(styles.searchResult)} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <p className={clsx(styles.searchTitle)}>Accounts</p>
                            {searchResults.map((item) => (
                                <AccountSearch key={item.id} data={item} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={clsx(styles.wrapper)}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        type="text"
                        placeholder="Search..."
                        className={clsx(styles.ipt)}
                        onChange={handleChange}
                    />
                    {searchValue && !loading && (
                        <button className={clsx(styles.clear)} onClick={handleClear}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    )}
                    {loading && (
                        <span className={clsx(styles.loading)}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </span>
                    )}
                    <button className={clsx(styles.btn)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
