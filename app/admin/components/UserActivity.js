"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { useStateContext } from "@/app/context/contextProvider";
import { useRouter } from "next/navigation";

function UserActivity({ currentUser }) {
  const { token, setToken } = useStateContext();
  const router = useRouter();
  const [user, setUser] = useState(null);

  if (!token) {
    router.push("/login");
  }

  useEffect(() => {
    setUser(currentUser);
  }, []);

  return (
    <div>
      <Link href="#" className="nav-link">
        <span className="m-3">{user?.name}</span>
        Profile
      </Link>
    </div>
  );
}

export default UserActivity;
