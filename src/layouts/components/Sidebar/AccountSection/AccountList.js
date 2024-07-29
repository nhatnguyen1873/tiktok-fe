import { memo } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import AccountItem from "./AccountItem";
import styles from "./AccountSection.module.scss";

const cx = classNames.bind(styles);

const ACCOUNT_DATA = {
    full_name: "HIEUTHUHAI",
    nickname: "hieuthuhai2222",
    avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_100x100.jpeg?lk3s=a5d48078&nonce=37218&refresh_token=1b5dca8ccc670b04df1d210833dad6bb&x-expires=1722416400&x-signature=D5i4oF9RVChYxdmgBW2lfFbsHow%3D&shp=a5d48078&shcp=81f88b70",
    tick: true,
};

function AccountList({ accounts }) {
    return (
        <div className={cx("account-list-container")}>
            <AccountItem account={ACCOUNT_DATA} />
            <AccountItem account={ACCOUNT_DATA} />
            <AccountItem account={ACCOUNT_DATA} />
            <AccountItem account={ACCOUNT_DATA} />
            <AccountItem account={ACCOUNT_DATA} />
            <AccountItem account={ACCOUNT_DATA} />
            <AccountItem account={ACCOUNT_DATA} />
            <AccountItem account={ACCOUNT_DATA} />
            <AccountItem account={ACCOUNT_DATA} />
        </div>
    );
}

AccountList.propTypes = {
    accounts: PropTypes.arrayOf(PropTypes.object),
};

export default memo(AccountList);
