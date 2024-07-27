import { memo } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
    primary,
    outlined,
    rounded,
    text,
    disabled,
    small,
    large,
    onClick,
    to,
    href,
    children,
    className,
    leftIcon,
    rightIcon,
    ...props
}) {
    let Component = "button";
    const _props = {
        ...props,
        onClick,
    };
    const classNames = cx(className, "container", {
        primary,
        outlined,
        rounded,
        text,
        disabled,
        small,
        large,
    });

    if (to) {
        Component = Link;
        _props.to = to;
    } else if (href) {
        Component = "a";
        _props.href = href;
    }

    if (disabled) {
        Object.keys(_props).forEach((propKey) => {
            if (propKey.startsWith("on") && typeof _props[propKey] === "function") delete _props[propKey];
        });
        delete _props.to;
        delete _props.href;
        _props.tabIndex = "-1";
    }

    return (
        <Component {..._props} className={classNames}>
            {leftIcon && <span className={cx("left-icon")}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={cx("right-icon")}>{rightIcon}</span>}
        </Component>
    );
}

Button.propTypes = {
    primary: PropTypes.bool,
    outlined: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    onClick: PropTypes.func,
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
};

export default memo(Button);
