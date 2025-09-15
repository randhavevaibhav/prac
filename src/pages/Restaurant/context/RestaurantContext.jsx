import { createContext, useContext, useState } from "react";

const RestaurantContext = createContext(null);

export const useRestaurantContext = () => {
  return useContext(RestaurantContext);
};

export const RestaurantContextProvider = ({ children }) => {
  const [resStore, setResStore] = useState({
    guests: 1,
    time: "12:00",
    date: new Date().toDateString(),
    contactFormData: null,
  });

  const addGuests = ({ guests }) => {
    setResStore({
      ...resStore,
      guests,
    });
  };

  const setTime = ({ time }) => {
    setResStore({
      ...resStore,
      time,
    });
  };

  const setDate = ({ date }) => {
    setResStore({
      ...resStore,
      date,
    });
  };

  const setContactForm = ({ formData }) => {
    setResStore({
      ...resStore,
      contactFormData: formData,
    });
  };
  return (
    <RestaurantContext.Provider
      value={{ resStore, setDate, setTime, addGuests, setContactForm }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};