import { memo } from "react";
import PropTypes from "prop-types";

import Header from "../components/Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div>{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node,
};

export default memo(HeaderOnly);
