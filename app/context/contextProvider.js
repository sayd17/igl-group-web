"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import CoverService from "../api/services/CoverService";

const StateContext = createContext({
  currentUser: null,
  token: null,
  coverImage: null,
  setCoverImage: () => {},
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
  const [coverImage, setCoverImage] = useState([]);
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

  useEffect(() => {
    CoverService.getAll()
      .then(({ data }) => {
        let obj = data?.data;
        const customArray = Object.keys(obj).map((key) => obj[key]);
        setCoverImage(customArray);
      })
      .catch((err) => {
        console.log("gallery api error", err);
      });
  }, []);

  console.log(coverImage);

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
        coverImage,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
