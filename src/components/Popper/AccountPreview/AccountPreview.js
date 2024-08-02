import { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";

import images from "@/assets/images";
import Image from "@/components/Image";
import Button from "@/components/Button";
import PopperContainer from "@/components/Popper";
import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);

function PreviewAccount({
    account,
    delay = [0, 0],
    hideOnClick = false,
    offset = [0, 10],
    placement = "bottom-start",
    className,
    children,
    ...props
}) {
    return (
        <div>
            <HeadlessTippy
                interactive
                delay={delay}
                hideOnClick={hideOnClick}
                offset={offset}
                placement={placement}
                render={(attrs) => (
                    <div tabIndex="-1" className={cx(className, "preview-account")} {...attrs}>
                        <PopperContainer className={cx("preview-container")}>
                            <header className={cx("header-container")}>
                                <Image
                                    src={account.avatar}
                                    alt={account.nickname}
                                    className={cx("avatar", {
                                        livestream: account.isLive,
                                    })}
                                />
                                <Button primary className={cx("follow-btn")}>
                                    Follow
                                </Button>
                            </header>
                            <h4 className={cx("nickname-container")}>
                                {account.nickname}
                                {account.tick && (
                                    <Image
                                        src={images.verifyBadge.default}
                                        alt="Verify Badge"
                                        className={cx("verify-badge-icon")}
                                    />
                                )}
                            </h4>
                            <p className={cx("full-name")}>{account.full_name}</p>
                            <p className={cx("sub-title")}>
                                6.7M<span className={cx("label")}>Followers</span>429.9M
                                <span className={cx("label")}>Likes</span>
                            </p>
                        </PopperContainer>
                    </div>
                )}
                {...props}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

PreviewAccount.propTypes = {
    account: PropTypes.object,
    delay: PropTypes.arrayOf(PropTypes.number),
    hideOnClick: PropTypes.bool,
    offset: PropTypes.arrayOf(PropTypes.number),
    placement: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default memo(PreviewAccount);
