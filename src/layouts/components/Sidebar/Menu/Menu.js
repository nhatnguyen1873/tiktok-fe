import { memo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import MenuItem from "./MenuItem";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ items }) {
    return (
        <nav className={cx("menu-container")}>
            {items.length > 0 && items.map((item, index) => <MenuItem key={index} data={item} />)}
        </nav>
    );
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default memo(Menu);
