import { memo } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./PopperContainer.module.scss";

const cx = classNames.bind(styles);

function PopperContainer({ children, className, ...props }) {
    return (
        <div className={cx(className, "container")} {...props}>
            {children}
        </div>
    );
}

PopperContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default memo(PopperContainer);
