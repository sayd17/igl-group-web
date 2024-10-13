"use client";

import Link from "next/link.js";
import LoginService from "../api/services/LoginService.js";
import { createRef } from "react";
import { useStateContext } from "../context/contextProvider.js";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const emailRef = createRef();
  const passwordRef = createRef();
  const { setUser, token, setToken } = useStateContext();
  const [message, setMessage] = useState(null);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  if (token) {
    router.push("/admin");
  }

  const onSubmit = (ev) => {
    ev.preventDefault();

    const payload = {
      email: email,
      password: password,
    };
    LoginService.post("/login", payload)
      .then(({ data }) => {
        setToken();
        router.push("/admin");
        console.log("login successful");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setError(response.data.message);
        }
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header text-center">
              <h3 className="title">Login into your account</h3>
            </div>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
