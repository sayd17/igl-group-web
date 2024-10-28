"use client";

import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";

const StateContext = createContext({
  currentUser: null,
  token: null,
  notification: null,
  setUser: () => {},
  currentSister: {},
  setCurrentSister: () => {},
  currentTeam: {},
  setCurrentTeam: () => {},
  setToken: () => {},
  setNotification: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(Cookies.get("token"));
  const [currentSister, setCurrentSister] = useState(null);
  const [currentTeam, setCurrentTeam] = useState(null);
  const [notification, _setNotification] = useState("");

  const setToken = () => {
    if (token) {
      _setToken(null);
      Cookies.remove("token");
    } else {
      Cookies.set("token", "token123");
      _setToken(Cookies.get("token"));
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
        currentTeam,
        setCurrentTeam,
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
