import { memo, useState, useEffect, useCallback, useMemo } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import images from "@/assets/images";
import Image from "@/components/Image";
import {
    MessageIcon,
    InboxIcon,
    CreatorIcon,
    LanguageIcon,
    QuestionIcon,
    MoonIcon,
    UserIcon,
    CoinIcon,
    GearIcon,
    LogoutIcon,
    SearchIcon,
    CloseCircleIcon,
    SpinnerIcon,
    PlusIcon,
    EllipsisVerticalIcon,
} from "@/components/Icons";
import PopperContainer from "@/components/Popper";
import AccountItem from "@/components/AccountItem";
import Button from "@/components/Button";
import { MenuPopper } from "@/components/Popper";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: "Creator tools",
        icon: <CreatorIcon />,
    },
    {
        title: "English",
        icon: <LanguageIcon />,
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
    },
    {
        title: "Feedback and help",
        icon: <QuestionIcon />,
        to: "/feedback",
    },
    {
        title: "Dark mode",
        icon: <MoonIcon />,
        children: {
            title: "Theme",
            data: [
                {
                    type: "theme",
                    title: "Dark mode",
                    theme: "dark",
                },
                {
                    type: "theme",
                    title: "Light mode",
                    theme: "Light",
                },
            ],
        },
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = useMemo(() => true, []);

    useEffect(() => {
        setSearchResult([1]);
    }, []);

    const handleChangeMenu = useCallback((item) => {
        console.log(item);

        // Handle logic
    }, []);

    const userMenu = [
        {
            title: "View profile",
            icon: <UserIcon />,
        },
        {
            title: "Get Coins",
            icon: <CoinIcon />,
        },
        MENU_ITEMS[0],
        {
            title: "Settings",
            icon: <GearIcon />,
        },
        ...MENU_ITEMS.slice(1),
        {
            title: "Log out",
            icon: <LogoutIcon />,
            separator: true,
        },
    ];

    return (
        <header className={cx("container")}>
            <div className={cx("wrapper")}>
                <div className={cx("logo-container")}>
                    <a className={cx("logo-wrapper")} href="/">
                        <img src={images.logo.default} alt="Tiktok" />
                    </a>
                </div>

                <div>
                    <HeadlessTippy
                        visible={searchResult.length > 0}
                        interactive
                        render={(attrs) => (
                            <div tabIndex="-1" className={cx("search-result")} {...attrs}>
                                <PopperContainer>
                                    <h4 className={cx("search-title")}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperContainer>
                            </div>
                        )}
                    >
                        <div className={cx("search-form")}>
                            <input placeholder="Search" className={cx("search-input")} />
                            <div className={cx("reset-search")}>
                                <span className={cx("reset-search-btn", "reset-icon")}>
                                    <CloseCircleIcon className={cx("reset-search-icon")} />
                                </span>
                                <span className={cx("reset-search-btn", "loading-icon")}>
                                    <SpinnerIcon className={cx("reset-search-icon")} />
                                </span>
                            </div>
                            <button className={cx("search-button")}>
                                <SearchIcon className={cx("search-button-icon")} />
                            </button>
                            <div className={cx("border-container")}></div>
                        </div>
                    </HeadlessTippy>
                </div>

                <div className={cx("actions-container")}>
                    {currentUser ? (
                        <>
                            <Button
                                className={cx("upload-button--logged-in")}
                                outlined
                                to="/upload"
                                leftIcon={<PlusIcon />}
                            >
                                Upload
                            </Button>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <span className={cx("action-btn")}>
                                    <MessageIcon className={cx("action-icon")} />
                                </span>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <span className={cx("action-btn")}>
                                    <InboxIcon className={cx("action-icon")} />
                                    <span className={cx("notification-badge")}>23</span>
                                </span>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text to="/upload" className={cx("upload-button")}>
                                Upload
                            </Button>
                            <Button primary className={cx("login-button")}>
                                Log in
                            </Button>
                        </>
                    )}
                    <MenuPopper
                        offset={currentUser ? [16, 12] : [18, 8]}
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleChangeMenu}
                    >
                        {currentUser ? (
                            <Image
                                className={cx("user-avatar")}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_100x100.jpeg?lk3s=a5d48078&nonce=35390&refresh_token=096d943fad2a16e5f5e014bcea51cde8&x-expires=1722009600&x-signature=JTKZTG6TjZI9%2BahP7CZCop3GrKc%3D&shp=a5d48078&shcp=81f88b70"
                                alt="User avatar"
                                fallback="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9eDR87r3p64w_TkB2yGvWzwxYWfx9QvWuA&s"
                            />
                        ) : (
                            <span className={cx("more-setting-btn")}>
                                <EllipsisVerticalIcon className={cx("more-setting-icon")} />
                            </span>
                        )}
                    </MenuPopper>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
