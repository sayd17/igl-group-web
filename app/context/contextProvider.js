// "use client";

import { createContext, useContext, useState } from "react";
import { cookies } from "next/headers";

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
  const [token, _setToken] = useState(null);
  // const [token, _setToken] = useState(12323);
  const [currentSister, setCurrentSister] = useState(1);
  const [notification, _setNotification] = useState("");

  const cookies = cookies();
  // Set a cookie
  // Cookies.set('user', 'JohnDoe', { expires: 7 });

  // // Get a cookie
  // const user = Cookies.get('user');

  const setToken = () => {
    _setToken(cookies.get("token"));
    if (cookies.has("token")) {
      // localStorage.setItem("ACCESS_TOKEN", token);
      cookies.set("token", "token123");
    } else {
      // localStorage.removeItem("ACCESS_TOKEN");
      cookies.delete("token");
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
