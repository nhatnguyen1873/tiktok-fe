import { memo } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import AccountList from "./AccountList";
import styles from "./AccountSection.module.scss";

const cx = classNames.bind(styles);

const DEFAULT_FUNC = () => {};

function AccountSection({ title, accounts, type, onShowMore = DEFAULT_FUNC }) {
    return (
        <div className={cx("section-container")}>
            <h2 className={cx("section-title")}>{title}</h2>
            <AccountList accounts={accounts} type={type} />
            <p onClick={onShowMore} className={cx("show-more-btn")}>
                See more
            </p>
        </div>
    );
}

AccountSection.propTypes = {
    title: PropTypes.string.isRequired,
    accounts: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    onShowMore: PropTypes.func,
};

export default memo(AccountSection);
