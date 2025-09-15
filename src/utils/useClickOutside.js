import { useEffect, useRef } from "react";

export const useClickOutside = ({ cb = () => {} }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
    //     console.log("event.target==> ",event.target)
    //   console.log("calling handleClickOutside");
    //   console.log("elementRef.current ==> ", elementRef.current);
    //   console.log(
    //     "elementRef.current.contains(event.target) ==> ",
    //     elementRef.current.contains(event.target)
    //   );
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        // console.log("calling callback");
        cb();
      } else {
        return false;
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  },[]);

  return elementRef;
};
