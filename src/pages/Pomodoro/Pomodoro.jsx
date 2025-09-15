import { useEffect, useState } from "react";
import { FaRegPauseCircle } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { GrCaretNext } from "react-icons/gr";
import { GiNextButton } from "react-icons/gi";

const Timer = ({
  isBreakTimer,
  startTime,
  onTimerEnd,
  currentSession,
  onSkipSession,
  onTimerStart,
  onTimerRestart,
  onResetSession,
}) => {
  const [time, setTime] = useState(startTime);
  const [isCountdownStarted, setIsCountDownStarted] = useState(false);

  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    if (isCountdownStarted && !isPaused) {
       console.log("timer paused",isPaused)
      let timer = setInterval(() => {
        setTime((prev) => {
          if (prev === 0) {
            clearInterval(timer);
            return 0;
          } else {
            return prev - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    } else if (!isCountdownStarted) {
      console.log("timer paused",isPaused)
      setTime(startTime);
      setIsPaused(false);
      onTimerRestart();
    }
  }, [isCountdownStarted, isPaused, startTime]);

  useEffect(() => {
    if (time === 0) {
      onTimerEnd();
      resetTimer();
    }
  }, [time]);

  const handleSkipSessions = () => {
    resetTimer();
    onSkipSession();
  };

  const resetTimer = () => {
    setTime(startTime);
    setIsCountDownStarted(false);
    setIsPaused(false);
  };

  // console.log("time ==> ",time);
  //  console.log("isCountdownStarted ==> ",isCountdownStarted);
  //  console.log("isPaused ==> ",isPaused);

  return (
    <div className="flex flex-col border items-center gap-4 border-black px-4 py-2 border-2 md:min-w-[500px] min-w-[100%] rounded-md">
      {isBreakTimer ? (
        <p className="text-xl font-semibold">
          Break Timer for Session: {currentSession > 1 ? currentSession - 1 : 4}
        </p>
      ) : (
        <>
          <p className="text-xl font-semibold">
            {" "}
            Session : {currentSession} of 4 (focusTime)
          </p>
        </>
      )}

      <p className="text-6xl font-semibold text-center mb-6">
        {`${Math.floor(time / 60)}`.padStart(2, 0)}:
        {`${Math.floor(time % 60)}`.padStart(2, 0)}
      </p>
      <div
        className={`flex gap-4  items-center ${
          isCountdownStarted ? `justify-between` : `justify-center`
        }`}
      >
        <button
          className="px-4 py-1 bg-blue-500 text-white font-semibold rounded"
          onClick={() => {
            setIsCountDownStarted((prev) => !prev);
            onTimerStart();
          }}
        >
          {isCountdownStarted ? (
            <VscDebugRestart size={`2rem`} />
          ) : (
            <p className="text-lg ">
              {isBreakTimer ? `Start break` : `Start session`}
            </p>
          )}
        </button>
        {!isCountdownStarted && !isBreakTimer ? (
          <button
            className="bg-blue-500 text-white text-lg font-semibold px-4 py-1 rounded"
            onClick={() => {
              resetTimer();
              onResetSession();
            }}
          >
            Reset All
          </button>
        ) : null}

        {isCountdownStarted ? (
          <>
            <button
              className="px-4 py-1 bg-blue-500 text-white font-semibold rounded "
              onClick={() => setIsPaused((prev) => !prev)}
            >
              {isPaused ? (
                <GrCaretNext size={`2rem`} />
              ) : (
                <FaRegPauseCircle size={`2rem`} />
              )}
            </button>

            <button
              className="px-4 py-1 bg-blue-500 text-white font-semibold rounded"
              onClick={handleSkipSessions}
            >
              <GiNextButton size={`2rem`} />
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

const Pomodoro = () => {
  const defaultFocusTime = 1_500; //25 mins
  const defaultBreakTime = 300; //5 mins
  const minFocusTime = 300; //5 mins
  const minBreakTime = 300; //5 mins
  const [showBreakTimer, setShowBreakTimer] = useState(false);
  const [currentSession, setCurrentSession] = useState(1);
  const [focusTime, setFocusTime] = useState(defaultFocusTime); //default focus time 25 min
  const [breakTime, setBreakTime] = useState(defaultBreakTime); //default break time 5 min
  const [isInputEnable, setIsInputEnable] = useState(true);
  const handleTimerEnd = () => {
    setIsInputEnable(true);
    if (!showBreakTimer) {
      handleSkipSessions();
    }
    setShowBreakTimer((prev) => !prev);
  };

  const handleSkipSessions = () => {
    setIsInputEnable(true);
    if (!showBreakTimer) {
      if (currentSession >= 4) {
        setCurrentSession(1);
      } else {
        setCurrentSession((prev) => prev + 1);
      }
    }

    setShowBreakTimer(false);
  };
  const handleTimerStart = () => {
    setIsInputEnable(false);
  };
  const handleTimerRestart = () => {
    setIsInputEnable(true);
  };

  const handleResetSession = () => {
    setCurrentSession(1);
  };
  return (
    <div className="flex justify-center items-center flex-col items-center gap-4">
      <h1 className="text-xl font-semibold">Pomodoro - Productivity App</h1>
      <div className="flex flex-col gap-4 ">
        <div className="flex gap-4 justify-center">
          <label htmlFor="focus_time">Set focus time&nbsp;( in m. ) :</label>
          <input
            id="focus_time"
            className="border border-gray-400 rounded md:px-2 md:py-1 md:max-w-[40%] max-w-[15%] text-center disabled:cursor-not-allowed"
            value={focusTime / 60}
            min={5}
            type="number"
            disabled={!isInputEnable || showBreakTimer}
            onChange={(e) => {
              let timeInMinutes = e.target.value;
              const minFocusTimeInMin = (minFocusTime/60)
              if (timeInMinutes < minFocusTimeInMin) {
                //min focus time
                timeInMinutes = minFocusTimeInMin;
              }
              setFocusTime(timeInMinutes * 60);
            }}
          />
        </div>
        <div className="flex gap-4 justify-center">
          <label htmlFor="focus_time">Set break time&nbsp;( in m. ) :</label>
          <input
            id="focus_time"
            type="number"
            disabled={!isInputEnable || showBreakTimer}
            className="border border-gray-400 rounded md:px-2 md:py-1 md:max-w-[40%] max-w-[15%] text-center disabled:cursor-not-allowed"
            value={breakTime / 60}
            min={5}
            onChange={(e) => {
              let timeInMinutes = e.target.value;
              const minBreakTimeInMin = (minBreakTime/60)
              if (timeInMinutes < minBreakTimeInMin) {
                //min break time
                timeInMinutes = minBreakTimeInMin;
              }
              setBreakTime(timeInMinutes * 60);
            }}
          />
        </div>
      </div>

      {/* screen */}
      <div>
        {!showBreakTimer ? (
          <Timer
            isBreakTimer={false}
            startTime={focusTime}
            onTimerEnd={handleTimerEnd}
            onSkipSession={handleSkipSessions}
            currentSession={currentSession}
            onTimerStart={handleTimerStart}
            onTimerRestart={handleTimerRestart}
            onResetSession={handleResetSession}
          />
        ) : (
          <Timer
            isBreakTimer={true}
            startTime={breakTime}
            onTimerEnd={handleTimerEnd}
            currentSession={currentSession}
            onSkipSession={handleSkipSessions}
            onTimerStart={handleTimerStart}
            onTimerRestart={handleTimerRestart}
          />
        )}
      </div>
    </div>
  );
};

export default Pomodoro;
