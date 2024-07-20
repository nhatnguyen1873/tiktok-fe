import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("container")}>
            <div className={cx("wrapper")}>Header</div>
        </header>
    );
}

export default Header;
