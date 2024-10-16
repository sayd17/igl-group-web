"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import UserService from "../../api/services/UserService";
import { useStateContext } from "@/app/context/contextProvider";
import { useRouter } from "next/navigation";

function UserActivity() {
  const [user, setUser] = useState(null);

  const { token, setToken } = useStateContext();
  const router = useRouter();

  if (!token) {
    router.push("/login");
  }

  useEffect(() => {
    UserService.getAll().then(({ data }) => {
      setUser(data?.data[0]);
    });
  }, []);

  return (
    <div>
      <Link href="/profile" className="nav-link">
        <span className="m-3">{user?.name}</span>
        Profile
      </Link>
    </div>
  );
}

export default UserActivity;
