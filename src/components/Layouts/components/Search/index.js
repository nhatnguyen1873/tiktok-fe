import { memo, useState, useEffect, useRef, useCallback, useLayoutEffect, useMemo } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import * as searchServices from "@/apiServices/searchServices";

import { SearchIcon, CloseCircleIcon, SpinnerIcon } from "@/components/Icons";
import PopperContainer from "@/components/Popper";
import AccountItem from "@/components/AccountItem";
import { useDebounce } from "@/hooks";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search({ ...props }) {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const debouncedSearchVal = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (debouncedSearchVal.trim()) {
            const fetchApi = async () => {
                setLoading(true);

                const result = await searchServices.search(debouncedSearchVal);

                setSearchResult(result);
                setLoading(false);
            };

            fetchApi();
        }
    }, [debouncedSearchVal]);

    useLayoutEffect(() => {
        if (!searchValue.trim()) {
            setSearchValue("");
            setSearchResult([]);
            setLoading(false);
        }
    }, [searchValue]);

    const handleChangeSearchValue = useCallback((event) => {
        const input = event.target;

        if (input.value[0] === " ") {
            const valueLength = input.value.length;
            input.setSelectionRange(valueLength, valueLength);
            return;
        }

        setSearchValue(input.value);
    }, []);

    const handleResetSearch = useCallback(() => {
        setSearchValue("");
        inputRef.current.focus();
    }, []);

    const handleHideResult = useCallback(() => {
        setShowResult(false);
    }, []);

    const resultAccounts = useMemo(
        () => searchResult.map((account) => <AccountItem key={account.id} account={account} />),
        [searchResult],
    );

    return (
        <div>
            <HeadlessTippy
                visible={showResult && searchResult.length > 0}
                interactive
                render={(attrs) => (
                    <div tabIndex="-1" className={cx("search-result")} {...attrs}>
                        <PopperContainer>
                            <h4 className={cx("search-title")}>Accounts</h4>
                            {searchResult.length > 0 && resultAccounts}
                        </PopperContainer>
                    </div>
                )}
                onClickOutside={handleHideResult}
                {...props}
            >
                <div className={cx("search-form")}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={(e) => handleChangeSearchValue(e)}
                        onFocus={() => setShowResult(true)}
                        placeholder="Search"
                        className={cx("search-input")}
                    />
                    <div className={cx("reset-search")}>
                        {loading ? (
                            <span className={cx("reset-search-btn", "loading-icon")}>
                                <SpinnerIcon className={cx("reset-search-icon")} />
                            </span>
                        ) : (
                            searchValue && (
                                <span onClick={handleResetSearch} className={cx("reset-search-btn", "reset-icon")}>
                                    <CloseCircleIcon className={cx("reset-search-icon")} />
                                </span>
                            )
                        )}
                    </div>
                    <button aria-label="Search" className={cx("search-button")}>
                        <SearchIcon className={cx("search-button-icon")} />
                    </button>
                    <div className={cx("border-container")}></div>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default memo(Search);
