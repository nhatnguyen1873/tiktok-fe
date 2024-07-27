import { memo } from "react";
import PropTypes from "prop-types";

function CreatorIcon({ width = "100%", height = "100%", ...props }) {
    return (
        <svg
            width={width}
            data-e2e=""
            height={height}
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5366 1.02886C10.2252 0.768225 9.77282 0.768225 9.46141 1.02886L0.729156 8.48328C0.555867 8.63122 0.533536 8.89091 0.679026 9.06625L1.20206 9.6966C1.35794 9.88447 1.64122 9.89868 1.81513 9.72736L2.51273 9.04012L3.24979 17.1829C3.30877 17.8345 3.85276 18.3334 4.50423 18.3334H15.1103C15.979 18.3334 16.7043 17.6682 16.7829 16.7993L17.4853 9.04012L18.1849 9.72798C18.3588 9.89903 18.6419 9.88469 18.7977 9.69694L19.3209 9.06628C19.4664 8.89093 19.4441 8.63121 19.2708 8.48329L10.5366 1.02886ZM4.88767 16.6466L4.08038 7.72809L9.99899 2.77458L15.9176 7.72809L15.1103 16.6466H4.88767ZM9.37502 14.0809L13.125 11.9158C13.9584 11.4347 13.9584 10.2319 13.125 9.75078L9.37502 7.58571C8.54169 7.10459 7.50002 7.706 7.50002 8.66825V12.9984C7.50002 13.9606 8.54169 14.562 9.37502 14.0809ZM9.16669 9.38993L11.6667 10.8333L9.16669 12.2767V9.38993Z"
            ></path>
        </svg>
    );
}

CreatorIcon.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default memo(CreatorIcon);
