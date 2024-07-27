import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx("container")}>
            <div className={cx("wrapper")}>Sidebar</div>
        </aside>
    );
}

export default Sidebar;
