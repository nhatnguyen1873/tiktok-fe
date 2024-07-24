import { memo } from "react";
import classNames from "classnames/bind";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./MenuPopper.module.scss";

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <div className={cx("menu-header")}>
            <FontAwesomeIcon className={cx("header-back-icon")} icon={faChevronLeft} onClick={onBack} />
            {title}
        </div>
    );
}

export default memo(Header);
