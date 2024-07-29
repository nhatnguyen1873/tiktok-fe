import { memo, useCallback } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";
import Image from "@/components/Image";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const containerClassNames = useCallback(({ isActive }) => cx("menu-item-container", { active: isActive }), []);
    // eslint-disable-next-line
    const iconClassNames = cx("menu-item-icon", { ["padding-container"]: data.smallIcon });
    const avatarContainerClassNames = cx("menu-item-avatar-container");
    const avatarClassNames = cx("menu-item-avatar");

    return (
        <NavLink className={containerClassNames} onClick={onClick} to={data.to}>
            {({ isActive }) => (
                <>
                    {data.icon ? (
                        <>
                            <span className={iconClassNames}>{isActive ? data.activeIcon : data.icon}</span>
                        </>
                    ) : (
                        data.image && (
                            <>
                                <span className={avatarContainerClassNames}>
                                    <Image src={data.image} alt={data.title} className={avatarClassNames} />
                                </span>
                            </>
                        )
                    )}
                    {data.title}
                </>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        to: PropTypes.string,
        icon: PropTypes.node,
        activeIcon: PropTypes.node,
        image: PropTypes.string,
    }),
    onClick: PropTypes.func,
};

export default memo(MenuItem);
