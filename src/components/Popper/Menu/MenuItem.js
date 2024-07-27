import { memo } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

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

MenuItem.propTypes = {
    data: PropTypes.shape({
        separator: PropTypes.bool,
        to: PropTypes.string,
        leftIcon: PropTypes.element,
        title: PropTypes.string.isRequired,
    }),
    onClick: PropTypes.func,
};

export default memo(MenuItem);
