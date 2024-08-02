import { memo } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import AccountList from "./AccountList";
import styles from "./AccountSection.module.scss";

const cx = classNames.bind(styles);

function AccountSection({ title, accountList }) {
    return (
        <div className={cx("section-container")}>
            <h2 className={cx("section-title")}>{title}</h2>
            <AccountList accountList={accountList} />
            <p className={cx("show-more-btn")}>See more</p>
        </div>
    );
}

AccountSection.propTypes = {
    title: PropTypes.string.isRequired,
    accountList: PropTypes.object.isRequired,
};

export default memo(AccountSection);
