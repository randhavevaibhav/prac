import { useRestaurantContext } from "../context/RestaurantContext";

export const SelectDate = () => {
  const { setDate } = useRestaurantContext();

  return (
    <>
      <div className="flex justify-between">
        <span className="font-semibold">Date :</span>
        <input
          title="date"
          type="date"
          onChange={(e) => {
            setDate({
              date: e.target.value,
            });
          }}
        />
      </div>
    </>
  );
};
