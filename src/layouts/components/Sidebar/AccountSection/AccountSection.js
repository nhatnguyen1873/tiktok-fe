import { memo } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import AccountList from "./AccountList";
import styles from "./AccountSection.module.scss";

const cx = classNames.bind(styles);

function AccountSection({ title, accounts }) {
    return (
        <div className={cx("section-container")}>
            <h2 className={cx("section-title")}>{title}</h2>
            <AccountList />
            <p className={cx("show-more-text")}>See more</p>
        </div>
    );
}

AccountSection.propTypes = {
    title: PropTypes.string,
    accounts: PropTypes.arrayOf(PropTypes.object),
};

export default memo(AccountSection);
