import { memo } from "react";
import classNames from "classnames/bind";

import { routesConfig } from "@/config";
import LinkList from "./LinkList";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const LINK_LIST = [
    {
        id: 0,
        title: "Company",
        links: [
            { name: "About", to: routesConfig.about },
            { name: "Newsroom", link: "https://newsroom.tiktok.com/" },
            { name: "Contact", to: routesConfig.contact },
            { name: "Careers", link: "https://careers.tiktok.com/" },
        ],
    },
    {
        id: 1,
        title: "Program",
        links: [
            { name: "TikTok for Good", to: routesConfig.forgood },
            { name: "Advertise on TikTok", to: routesConfig.business },
            { name: "TikTok LIVE Creator Networks", to: routesConfig.creatorNetworks },
            { name: "Developers", link: "https://developers.tiktok.com/?refer=tiktok_web" },
            { name: "Transparency", to: routesConfig.transparency },
            { name: "TikTok Rewards", to: routesConfig.tiktokRewards },
            { name: "TikTok Embeds", to: routesConfig.embed },
        ],
    },
    {
        id: 2,
        title: "Terms & Policies",
        links: [
            { name: "Help", link: "https://support.tiktok.com/en" },
            { name: "Safety", to: routesConfig.safety },
            { name: "Terms", to: routesConfig.termsOfService },
            { name: "Privacy Policy", to: routesConfig.privacyPolicy },
            { name: "Privacy Center", to: routesConfig.privacyCenter },
            { name: "Creator Academy", to: routesConfig.creatorAcademy },
            { name: "Community Guidelines", to: routesConfig.communityGuidelines },
        ],
    },
];

function Footer() {
    return (
        <footer className={cx("container")}>
            <a
                href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v1&utm_source=tiktok_webapp_main"
                className={cx("effect-house-link")}
            >
                <img
                    alt="TikTok Effect House"
                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png"
                    className={cx("effect-house-img")}
                />
                <h4 className={cx("effect-house-label")}>Create TikTok effects, get a reward</h4>
            </a>
            <LinkList list={LINK_LIST} />
            <span className={cx("footer-copyright")}>&copy; 2024 TikTok</span>
        </footer>
    );
}

export default memo(Footer);
