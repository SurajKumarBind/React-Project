import React, { createContext, useState } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [city, setCity] = useState("Varanasi");

  return (
    <LocationContext.Provider value={{ city, setCity }}>
      {children}
    </LocationContext.Provider>
  );
};
