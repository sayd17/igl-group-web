"use client";

import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const StateContext = createContext({
  currentUser: null,
  token: null,
  currentSister: {},
  notification: null,
  setUser: () => {},
  setCurrentSister: () => {},
  setToken: () => {},
  setNotification: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(Cookies.get("token"));
  const [currentSister, setCurrentSister] = useState(1);
  const [notification, _setNotification] = useState("");

  const setToken = () => {
    if (token) {
      _setToken(null);
      Cookies.remove("token");
    } else {
      _setToken(Cookies.get("token"));
      Cookies.set("token", "token123");
    }
  };

  const setNotification = (message) => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification("");
    }, 5000);
  };

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        token,
        currentSister,
        setCurrentSister,
        setToken,
        notification,
        setNotification,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
