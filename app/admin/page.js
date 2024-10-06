"use client";

import Link from "next/link";
import axiosApi from "../api/axiox-common";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStateContext } from "../context/contextProvider";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);
  const { token } = useStateContext();

  if (!token) {
    router.push("/login");
  }

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosApi.post("/logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosApi.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div id="defaultLayout">
      <aside>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/users">Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>Header</div>

          <div>
            {user?.name} &nbsp; &nbsp;
            <a onClick={onLogout} className="btn-logout" href="#">
              Logout
            </a>
          </div>
        </header>
        <main>{/* <Outlet /> */}</main>
        {notification && <div className="notification">{notification}</div>}
      </div>
    </div>
  );
}
