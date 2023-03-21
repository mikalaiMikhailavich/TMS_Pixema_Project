import { useEffect } from "react";

export const useOutsideClick = (
  elementRef: any,
  handler: () => void,
  attached = true
) => {
  useEffect(() => {
    if (!attached) {
      console.log("111111");

      return;
    }

    const handleClick = (e: Event) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [elementRef, handler, attached]);
};
