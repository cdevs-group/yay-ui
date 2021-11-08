import { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = () => {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
  };

  useEffect(() => {
    if (window && hasWindow) {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, hasWindow]);

  return windowDimensions;
}
