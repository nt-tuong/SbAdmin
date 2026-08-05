function isIPad() {
    if (typeof navigator === "undefined") {
        alert("[isIPad] navigator is undefined -> false");
        return false;
    }
    const userAgent = navigator.userAgent || "";
    const platform = navigator.platform || "";
    const maxTouchPoints = navigator.maxTouchPoints || 0;
    const hasOnTouchEnd = typeof document !== "undefined" && "ontouchend" in document;
    const isClassicIPad = /iPad/i.test(userAgent) || /iPad/i.test(platform);
    const looksLikeMac = platform.includes("Mac") || /Macintosh/i.test(userAgent);
    const hasTouch = maxTouchPoints > 0 || hasOnTouchEnd;
    const result = isClassicIPad || (looksLikeMac && hasTouch);
    alert(`[isIPad] | [userAgent]: ${userAgent} | [platform]: ${platform} | [maxTouchPoints]: ${maxTouchPoints} | [hasOnTouchEnd]: ${hasOnTouchEnd} | [isClassicIPad]: ${isClassicIPad} | [looksLikeMac]: ${looksLikeMac} | [hasTouch]: ${hasTouch} | [result]: ${result}`);
    return result;
}


isIPad();