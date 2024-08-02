import { memo } from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

const linkList = [
    {
        title: "Company",
        links: [
            { name: "About", to: "/about" },
            { name: "Newsroom", link: "https://newsroom.tiktok.com/" },
            { name: "Contact", to: "/about/contact" },
            "Careers",
        ],
    },
    {
        title: "Program",
        links: [
            "TikTok for Good",
            "Advertise",
            "TikTok LIVE Creator Networks",
            "Developers",
            "Transparency",
            "TikTok Rewards",
            "TikTok Embeds",
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
                    alt="Effect House"
                    src="https://sf16-website-login.neutral.ttwstatic.com/obj/tiktok_web_login_static/tiktok/webapp/main/webapp-desktop/8152caf0c8e8bc67ae0d.png"
                    className={cx("effect-house-img")}
                />
                <span className={cx("effect-house-label")}>Create TikTok effects, get a reward</span>
            </a>
            <h4 className={cx("footer-text")}>Company</h4>
            <h4 className={cx("footer-text")}>Program</h4>
            <h4 className={cx("footer-text")}>Terms & Policies</h4>
            <span className={cx("footer-copyright")}>&copy; 2024 TikTok</span>
        </footer>
    );
}

export default memo(Footer);
