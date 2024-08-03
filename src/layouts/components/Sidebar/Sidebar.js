import { memo } from "react";
import classNames from "classnames/bind";

import Menu from "./Menu";
import AccountSection from "./AccountSection";
import Footer from "./Footer";
import {
    CameraIcon,
    CameraSolidIcon,
    ExploreIcon,
    ExploreSolidIcon,
    FollowingIcon,
    FollowingSolidIcon,
    GroupIcon,
    GroupSolidIcon,
    HomeIcon,
    HomeSolidIcon,
} from "@/components/Icons";
import { routesConfig } from "@/config";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        title: "For You",
        icon: <HomeIcon width={32} height={32} />,
        activeIcon: <HomeSolidIcon width={32} height={32} />,
        to: routesConfig.home,
    },
    {
        title: "Explore",
        icon: <ExploreIcon width={32} height={32} />,
        activeIcon: <ExploreSolidIcon width={32} height={32} />,
        to: routesConfig.explore,
    },
    {
        title: "Following",
        icon: <FollowingIcon width={24} height={24} />,
        activeIcon: <FollowingSolidIcon width={24} height={24} />,
        to: routesConfig.following,
        smallIcon: true,
    },
    {
        title: "Friends",
        icon: <GroupIcon width={32} height={32} />,
        activeIcon: <GroupSolidIcon width={32} height={32} />,
        to: routesConfig.friends,
    },
    {
        title: "LIVE",
        icon: <CameraIcon width={32} height={32} />,
        activeIcon: <CameraSolidIcon width={32} height={32} />,
        to: routesConfig.live,
    },
    {
        title: "Profile",
        to: routesConfig.profile,
        image: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
    },
];

const SUGGESTED_ACCOUNTS = {
    type: "suggested",
    accounts: [
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7330491752077492256~c5_100x100.jpeg?lk3s=a5d48078&nonce=1815&refresh_token=2528836c9ac035e055f70f407890020a&x-expires=1722758400&x-signature=sP3miPgSbfativ2KT8FtcSFjx4Q%3D&shp=a5d48078&shcp=81f88b70",
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
            isLive: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
            isLive: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
            isLive: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
        },
    ],
};

const FOLLOWING_ACCOUNTS = {
    type: "following",
    accounts: [
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7330491752077492256~c5_100x100.jpeg?lk3s=a5d48078&nonce=1815&refresh_token=2528836c9ac035e055f70f407890020a&x-expires=1722758400&x-signature=sP3miPgSbfativ2KT8FtcSFjx4Q%3D&shp=a5d48078&shcp=81f88b70",
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
            isLive: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
            isLive: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
            isLive: true,
        },
        {
            full_name: "HIEUTHUHAI",
            nickname: "hieuthuhai2222",
            avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_720x720.jpeg?lk3s=a5d48078&nonce=26527&refresh_token=0de63e418f6efe3d185ac72b73a0a67f&x-expires=1722697200&x-signature=MlJkREg7%2BnRRdDKjvpR9f8AND8w%3D&shp=a5d48078&shcp=81f88b70",
            tick: true,
        },
    ],
};

function Sidebar() {
    return (
        <aside className={cx("container")}>
            <div className={cx("wrapper")}>
                <Menu items={MENU_ITEMS} />
                <AccountSection title="Suggested accounts" accountList={SUGGESTED_ACCOUNTS} />
                <AccountSection title="Following accounts" accountList={FOLLOWING_ACCOUNTS} />
                <Footer />
            </div>
        </aside>
    );
}

export default memo(Sidebar);
