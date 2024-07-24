import { memo, forwardRef, useCallback, useState } from "react";

const placeholderImg = "https://placehold.co/100?text=No+Image&font=roboto";

function Image({ src, alt, fallback: customFallback = placeholderImg, ...props }, ref) {
    const [fallback, setFallback] = useState("");

    const handleError = useCallback(() => {
        setFallback(customFallback);
    }, [customFallback]);

    return <img src={fallback || src} alt={alt} ref={ref} onError={handleError} {...props} />;
}

export default memo(forwardRef(Image));
