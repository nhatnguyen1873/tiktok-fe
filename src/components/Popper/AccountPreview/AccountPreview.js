import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";

import images from "@/assets/images";
import { convertIntoAbbreviation } from "@/utils/transformNumber";
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
    const { followers_count, likes_count } = account;
    const followersCount = useMemo(() => convertIntoAbbreviation(followers_count), [followers_count]);
    const likesCount = useMemo(() => convertIntoAbbreviation(likes_count), [likes_count]);

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
                            <p className={cx("full-name")}>{account.first_name + " " + account.last_name}</p>
                            <p className={cx("sub-title")}>
                                {followersCount}
                                <span className={cx("label")}>Followers</span>
                                {likesCount}
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
    account: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        nickname: PropTypes.string,
        avatar: PropTypes.string,
        tick: PropTypes.bool,
        isLive: PropTypes.bool,
        followers_count: PropTypes.number,
        likes_count: PropTypes.number,
    }),
    delay: PropTypes.arrayOf(PropTypes.number),
    hideOnClick: PropTypes.bool,
    offset: PropTypes.arrayOf(PropTypes.number),
    placement: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default memo(PreviewAccount);
