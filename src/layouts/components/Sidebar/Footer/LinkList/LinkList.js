import { memo, useState, useCallback } from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

import LinkGroup from "./LinkGroup";
import styles from "./LinkList.module.scss";

const cx = classNames.bind(styles);

function LinkList({ list }) {
    const [activeGroup, setActiveGroup] = useState(-1);

    const handleOnClickGroup = useCallback((index) => {
        setActiveGroup((prevActiveGroup) => (index === prevActiveGroup ? -1 : index));
    }, []);

    return (
        <div className={cx("link-list-container")}>
            {list.length > 0 &&
                list.map((item, index) => (
                    <LinkGroup
                        key={index}
                        group={item}
                        active={index === activeGroup}
                        onChangeActiveGroup={handleOnClickGroup}
                    />
                ))}
        </div>
    );
}

LinkList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default memo(LinkList);
