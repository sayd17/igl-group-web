"use client";

import Link from "next/link.js";
import axiosApi from "../api/axiox-common";
import { createRef } from "react";
import { useStateContext } from "../context/contextProvider.js";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const emailRef = createRef();
  const passwordRef = createRef();
  const { setUser, setToken } = useStateContext();
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        router.push("/login");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setMessage(response.data.message);
        }
      });
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Login into your account</h1>

          {message && (
            <div className="alert">
              <p>{message}</p>
            </div>
          )}

          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not registered? <Link href="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
