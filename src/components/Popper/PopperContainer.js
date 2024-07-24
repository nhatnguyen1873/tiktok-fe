import { memo } from "react";
import classNames from "classnames/bind";

import styles from "./PopperContainer.module.scss";

const cx = classNames.bind(styles);

function PopperContainer({ children, className, ...props }) {
    return (
        <div className={cx(className, "container")} {...props}>
            {children}
        </div>
    );
}

export default memo(PopperContainer);
