import { memo } from "react";
import classNames from "classnames/bind";

import Button from "@/components/Button";
import styles from "./MenuPopper.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick, ...props }) {
    const className = cx("menu-item-container", {
        separator: data.separator,
    });

    return (
        <Button onClick={onClick} className={className} to={data.to} leftIcon={data.icon} {...props}>
            {data.title}
        </Button>
    );
}

export default memo(MenuItem);
