import { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(10);
  const [isPaused, setIsPaused] = useState(false);
  const [isRestart, setIsRestart] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      let timer = setInterval(() => {
        setCount((prev) => {
          if (prev === 0) {
            clearInterval(timer);
            return 0;
          } else {
            return prev - 1;
          }
        });
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isPaused, isRestart]);

  const reStartTimer = () => {
    setCount(10);
    setIsPaused(false);
    setIsRestart((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-6">
      Test
      <p>count: {count}</p>
      <button onClick={() => setIsPaused((prev) => !prev)}>
        {isPaused ? "Resume" : `Pause`}
      </button>
      <button onClick={reStartTimer}>Restart</button>
    </div>
  );
};

export default Test;

/*
For adding restart functionality we have added a `Restart` button which on click will toggle a
state variable `isRestart`. We also added this variable in `useEffect` dependency array.

Also we have added a new `restartTimer` function which will reset the timer by setting 
count to 10, `isPaused` to `false` and by toggling `isRestart`.

By setting count to 10 we ensure count-down starts from 10.
By setting `isPaused` to `false` we ensure that counter is not paused.
By toggling `isRestart` we are re-running the code inside `useEffect` first 
cleanup to clear previous interval timer and then useEffect by creating new interval timer.


*/
