import { memo } from "react";
import classNames from "classnames/bind";

import images from "@/assets/images";
import Image from "@/components/Image";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx("container")}>
            <Image
                alt="Avatar"
                className={cx("avatar-image")}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_100x100.jpeg?lk3s=a5d48078&nonce=35390&refresh_token=096d943fad2a16e5f5e014bcea51cde8&x-expires=1722009600&x-signature=JTKZTG6TjZI9%2BahP7CZCop3GrKc%3D&shp=a5d48078&shcp=81f88b70"
            />

            <div className={cx("user-info-container")}>
                <h4 className={cx("username-container")}>
                    hieuthuhai2222
                    <img src={images.verifyBadge.default} className={cx("verify-badge-icon")} alt="Verify badge" />
                </h4>
                <p className={cx("nickname")}>HIEUTHUHAI</p>
            </div>
        </div>
    );
}

export default memo(AccountItem);
