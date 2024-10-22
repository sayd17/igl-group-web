"use client";

import { createContext, useContext, useState } from "react";

const StateContext = createContext({
  currentAlbum: [],
  setCurrentAlbum: () => [],
});

export const GalleryContextProvider = ({ children }) => {
  const [currentAlbum, setCurrentAlbum] = useState([]);

  return (
    <StateContext.Provider
      value={{
        currentAlbum,
        setCurrentAlbum,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGalleryContext = () => useContext(StateContext);
