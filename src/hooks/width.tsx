import { useState, useEffect } from "react";

function useWindowWidth(): number | undefined {
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default useWindowWidth;
