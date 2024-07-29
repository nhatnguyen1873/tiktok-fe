import { memo } from "react";
import PropTypes from "prop-types";

const FollowingIcon = memo(({ width = "100%", height = "100%", ...props }) => (
    <svg
        fill="currentColor"
        width={width}
        height={height}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M18.99 4a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 4a6 6 0 1 0 0 12.01A6 6 0 0 0 19 8ZM18.99 27c2.96 0 5.6.58 7.87 1.65l-3.07 3.06a15.38 15.38 0 0 0-4.8-.71C10.9 31 6.3 36.16 6 44c-.02.55-.46 1-1.02 1h-2c-.55 0-1-.45-.98-1C2.33 33.99 8.7 27 19 27ZM35.7 42.88 31.82 39H45a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H31.82l3.88-3.88a1 1 0 0 0 0-1.41l-1.41-1.42a1 1 0 0 0-1.42 0l-7.3 7.3a2 2 0 0 0 0 2.82l7.3 7.3a1 1 0 0 0 1.42 0l1.41-1.42a1 1 0 0 0 0-1.41Z"></path>
    </svg>
));

FollowingIcon.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const FollowingSolidIcon = memo(({ width = "100%", height = "100%", ...props }) => (
    <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="m17.851 21.44-1.94-1.94H22.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-6.59l1.94-1.94a.5.5 0 0 0 0-.706l-.707-.708a.5.5 0 0 0-.707 0l-3.649 3.647a1 1 0 0 0 0 1.414l3.648 3.647a.5.5 0 0 0 .708 0l.707-.708a.5.5 0 0 0 0-.707M4.5 7c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5"></path>
        <path d="M1 20.72c0-3.26 3.03-7.22 8.5-7.22 1.589 0 2.971.334 4.134.888l-2.03 1.952a3 3 0 0 0-.004 4.321l1.906 1.839H5.5c-3.5 0-4.5 0-4.5-1.78"></path>
    </svg>
));

FollowingSolidIcon.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { FollowingIcon, FollowingSolidIcon };
