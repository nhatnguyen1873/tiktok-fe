import { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Image from "@/components/Image";
import images from "@/assets/images";
import styles from "./AccountSection.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ account }) {
    return (
        <Link to={`/@${account.nickname}`} className={cx("account-item-container")}>
            <Image src={account.avatar} alt={account.nickname} className={cx("account-avatar")} />
            <div className={cx("user-info-container")}>
                <h4 className={cx("nickname-container")}>
                    {account.nickname}
                    {account.tick && (
                        <img src={images.verifyBadge.default} alt="Verify badge" className={cx("verify-badge-icon")} />
                    )}
                </h4>
                <p className={cx("full-name")}>{account.full_name}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    account: PropTypes.shape({
        full_name: PropTypes.string,
        nickname: PropTypes.string,
        avatar: PropTypes.string,
        tick: PropTypes.bool,
    }),
};

export default memo(AccountItem);
