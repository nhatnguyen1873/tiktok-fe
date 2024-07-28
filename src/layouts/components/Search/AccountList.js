import { memo } from "react";
import PropTypes from "prop-types";

import AccountItem from "@/components/AccountItem";

function AccountList({ accounts }) {
    return accounts.map((account) => <AccountItem key={account.id} account={account} />);
}

AccountList.propTypes = {
    accounts: PropTypes.arrayOf(PropTypes.object),
};

export default memo(AccountList);
