import { useRef, useState } from "react";

export const useCopyToClipboard = (timeout = 3000) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  const clearTimer = (timer) => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  };

  const copyToClipboard = (value,onSuccess=()=>{}) => {
    navigator.clipboard.writeText(value);
    clearTimer(timer)
    setCopied(true);
    onSuccess()

    timer.current = setTimeout(() => {
      setCopied(false);
    }, timeout);
  };

  return [copied, copyToClipboard];
};
