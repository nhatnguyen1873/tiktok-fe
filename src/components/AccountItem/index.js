import { memo } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import images from "@/assets/images";
import Image from "@/components/Image";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem({ account }) {
    return (
        <Link to={`/@${account.nickname}`} className={cx("container")}>
            <Image alt={account.full_name} className={cx("avatar-image")} src={account.avatar} />

            <div className={cx("user-info-container")}>
                <h4 className={cx("username-container")}>
                    {account.full_name}
                    {account.tick && (
                        <img src={images.verifyBadge.default} className={cx("verify-badge-icon")} alt="Verify badge" />
                    )}
                </h4>
                <p className={cx("nickname")}>{account.nickname}</p>
            </div>
        </Link>
    );
}

export default memo(AccountItem);
