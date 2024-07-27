import classNames from "classnames/bind";
import PropTypes from "prop-types";

import Header from "../components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("container")}>
            <Header />
            <div className={cx("body-container")}>
                <div className={cx("body-wrapper")}>
                    <Sidebar />
                    <div className={cx("content-container")}>{children}</div>
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node,
};

export default DefaultLayout;
