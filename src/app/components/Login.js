"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigation = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const tokenn = localStorage.getItem("token");

    if (tokenn) {
      navigation.push("/user-list");
    }
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [navigation]);

  const handleLogin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setError("Please enter a valid email address");
      return;
    }
    if (email && password) {
      const dummyToken = Math.random().toString(36).substring(7); // Generate random token
      setToken(dummyToken);
      localStorage.setItem("token", dummyToken);
      setError("");
      toast.success("Login Successfully");
      navigation.push("/user-list");
    }
  };
  return (
    <>
      <div className="App">
        <div className="login-container">
          <h1>Login Form</h1>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button
            className="login-button"
            onClick={handleLogin}
            disabled={!email || !password}
          >
            Login
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
