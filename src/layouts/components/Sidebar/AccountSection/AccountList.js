import { memo } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import AccountPreview from "@/components/Popper/AccountPreview";
import AccountItem from "./AccountItem";
import styles from "./AccountSection.module.scss";

const cx = classNames.bind(styles);

function AccountList({ accountList }) {
    const { type, accounts } = accountList;

    return (
        <div className={cx("account-list-container")}>
            {accounts.length > 0
                ? accounts.map((account, index) =>
                      type === "suggested" ? (
                          <AccountPreview
                              key={index}
                              account={account}
                              delay={[800, 0]}
                              offset={[0, 0]}
                              hideOnClick={true}
                          >
                              <AccountItem account={account} />
                          </AccountPreview>
                      ) : (
                          type === "following" && <AccountItem key={index} account={account} />
                      ),
                  )
                : "No account"}
        </div>
    );
}

AccountList.propTypes = {
    accountList: PropTypes.shape({ type: PropTypes.string, accounts: PropTypes.array }).isRequired,
};

export default memo(AccountList);
