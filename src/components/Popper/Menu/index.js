import { memo, useState, useMemo, useCallback } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import PopperContainer from "@/components/Popper";

import MenuItem from "./MenuItem";
import Header from "./Header";
import styles from "./MenuPopper.module.scss";

const cx = classNames.bind(styles);

const defaultFunc = () => {};

function MenuPopper({ offset = [0, 10], items = [], className, onChange = defaultFunc, children, ...props }) {
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

    return (
        <Tippy
            interactive
            delay={[0, 800]}
            placement="bottom-end"
            offset={offset}
            render={(attrs) => (
                <div tabIndex="-1" className={cx(className, "menu-container")} {...attrs}>
                    <span className={cx("arrow-up")}></span>

                    <PopperContainer>
                        {currentData.title && <Header title={currentData.title} onBack={handleBack} />}
                        {itemList}
                    </PopperContainer>
                </div>
            )}
            onHide={handleResetHistory}
            {...props}
        >
            {children}
        </Tippy>
    );
}

export default memo(MenuPopper);
