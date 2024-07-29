import { memo } from "react";
import classNames from "classnames/bind";

import Menu from "./Menu";
import AccountSection from "./AccountSection";
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
        image: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7dc789b28318e5489cfeeb1d39b35969~c5_100x100.jpeg?lk3s=a5d48078&nonce=49665&refresh_token=c7dfe340c5c5de6783ca4bfcf6b3d88f&x-expires=1722369600&x-signature=2eS4n%2Bc9ABk%2FWzR77smc%2F%2FNuQm0%3D&shp=a5d48078&shcp=81f88b70",
    },
];

function Sidebar() {
    return (
        <aside className={cx("container")}>
            <div className={cx("wrapper")}>
                <Menu items={MENU_ITEMS} />
                <AccountSection title="Following accounts" />
            </div>
        </aside>
    );
}

export default memo(Sidebar);
