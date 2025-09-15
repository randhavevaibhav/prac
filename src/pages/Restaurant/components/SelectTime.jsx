import { useRestaurantContext } from "../context/RestaurantContext";

export const SelectTime = () => {
  const { setTime,resStore } = useRestaurantContext();
  let h = 0;
  const timeSlots = Array.from({ length: 47 }, (_, i) => {
    if (i % 2 === 0) {
      h++;
      let slot = `${h}:00`;

      return slot;
    } else {
      return `${h}:30`;
    }
  });

  return (
    <div className="flex items-center justify-between">
      <span className="font-semibold">Select Time: </span>
      <div className="max-h-48">
        <select onChange={(e) => setTime({ time: e.target.value })} defaultValue={resStore.time}>
          {timeSlots.map((time,i) => {
            return <option value={time} key={i}>{time}</option>;
          })}
        </select>
      </div>
    </div>
  );
};