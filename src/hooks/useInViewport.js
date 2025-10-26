import { useEffect, useState } from "react";

export const useInViewport = (elementRef, rootElementRef) => {
  const [visible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = ({ entries = [] }) => {
      if (!entries.length >= 1) {
        const element = elementRef.current;
        const rootElement = rootElementRef?.current;
        const elementRect = element.getBoundingClientRect();
        const rootRect = rootElement
          ? rootElement.getBoundingClientRect()
          : {
              top: 0,
              left: 0,
              bottom: window.innerHeight,
              right: window.innerWidth,
            };

        setIsVisible(
          elementRect.top < rootRect.bottom &&
            elementRect.bottom > rootRect.top &&
            elementRect.left < rootRect.right &&
            elementRect.right > rootRect.left
        );
      }
      entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting;
        console.log("isIntersecting ===> ", isIntersecting);
        setIsVisible(isIntersecting);
      });
    };

    if (!elementRef.current) {
      return;
    }

    let observer = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver((entries) =>
        checkVisibility({ entries })
      );
      observer.observe(elementRef.current);
    } else {
      document.addEventListener("scroll", checkVisibility);
      document.addEventListener("resize", checkVisibility);
    }

    return () => {
      if (!elementRef.current) {
        return;
      }
      if ("IntersectionObserver" in window) {
        observer.disconnect();
      } else {
        document.removeEventListener("scroll", checkVisibility);
        document.removeEventListener("resize", checkVisibility);
      }
    };
  }, [elementRef]);

  return visible;
};
