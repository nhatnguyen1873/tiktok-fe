import { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import styles from "./LinkList.module.scss";

const cx = classNames.bind(styles);

function LinkGroup({ group, active = false, onChangeActiveGroup }) {
    const { id, title, links } = group;

    return (
        <div className={cx("link-group-container")}>
            <h4 onClick={() => onChangeActiveGroup(id)} className={cx("title-group", { active })}>
                {title}
            </h4>
            {active && links.length > 0 && (
                <div className={cx("links-group")}>
                    {links.map((item, index) =>
                        item.link ? (
                            <a key={index} href={item.link} className={cx("link-label")}>
                                {item.name}
                            </a>
                        ) : (
                            item.to && (
                                <Link key={index} to={item.to} className={cx("link-label")}>
                                    {item.name}
                                </Link>
                            )
                        ),
                    )}
                </div>
            )}
        </div>
    );
}

LinkGroup.propTypes = {
    group: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                link: PropTypes.string,
                to: PropTypes.string,
            }),
        ),
    }).isRequired,
    active: PropTypes.bool,
    onChangeActiveGroup: PropTypes.func,
};

export default memo(LinkGroup);
