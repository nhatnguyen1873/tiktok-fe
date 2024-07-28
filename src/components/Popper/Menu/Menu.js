import { memo, useState, useMemo, useCallback } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import PopperContainer from "@/components/Popper";
import PropTypes from "prop-types";

import MenuItem from "./MenuItem";
import Header from "./Header";
import styles from "./MenuPopper.module.scss";

const cx = classNames.bind(styles);

const defaultFunc = () => {};

function MenuPopper({
    offset = [0, 10],
    hideOnClick = false,
    delay = [0, 600],
    items = [],
    onChange = defaultFunc,
    className,
    children,
    ...props
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentData = useMemo(() => history[history.length - 1], [history]);

    const itemList = useMemo(
        () =>
            currentData.data.map((item, index) => {
                const isParent = !!item.children;

                const handleClickItem = () => {
                    if (isParent) {
                        setHistory((prev) => [...prev, item.children]);
                    } else {
                        onChange(item);
                    }
                };

                return <MenuItem key={index} onClick={handleClickItem} data={item} />;
            }),
        [currentData, onChange],
    );

    const handleBack = useCallback(() => {
        setHistory((prev) => prev.slice(0, -1));
    }, []);

    const handleResetHistory = useCallback(() => {
        setHistory((prev) => prev.slice(0, 1));
    }, []);

    const handleRenderResult = (attrs) => {
        return (
            <div tabIndex="-1" className={cx(className, "menu-container")} {...attrs}>
                <span className={cx("arrow-up")}></span>

                <PopperContainer>
                    {currentData.title && <Header title={currentData.title} onBack={handleBack} />}
                    <div className={cx("menu-body")}>{itemList}</div>
                </PopperContainer>
            </div>
        );
    };

    return (
        <Tippy
            interactive
            delay={delay}
            placement="bottom-end"
            offset={offset}
            render={handleRenderResult}
            onHide={handleResetHistory}
            hideOnClick={hideOnClick}
            {...props}
        >
            {children}
        </Tippy>
    );
}

MenuPopper.propTypes = {
    offset: PropTypes.array,
    hideOnClick: PropTypes.bool,
    delay: PropTypes.array,
    items: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default memo(MenuPopper);
