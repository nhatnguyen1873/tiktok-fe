import { memo, forwardRef, useCallback, useState } from "react";
import PropTypes from "prop-types";

const placeholderImg = "https://placehold.co/100?text=No+Image&font=roboto";

const Image = forwardRef(({ src, alt, fallback: customFallback = placeholderImg, ...props }, ref) => {
    const [fallback, setFallback] = useState("");

    const handleError = useCallback(() => {
        setFallback(customFallback);
    }, [customFallback]);

    return <img src={fallback || src} alt={alt} ref={ref} onError={handleError} {...props} />;
});

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    fallback: PropTypes.string,
};

export default memo(Image);
