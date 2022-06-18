import axios from "axios";
import React, { useState } from "react";
import {Navigate, useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    

    const data = new FormData(e.target);
    const user={
      email:data.get("email"),
      password:data.get("password")
    }
    console.log(user)
    if (user.email === "  " || user.password === " ") {
      alert("Please fill all the fields");
    }
    else {
      axios
      .post(
          "http://localhost:1234/api/auth/login",
          {
            email: data.get("email"),
            password: data.get("password"),
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            setIsLoggedIn(true);
            navigate("/");
          }
        })
        .catch((error)=>{
          console.log(error)
        })
    }
    

  };
  const html=<div style={{ height: "70%", margin: "5% auto auto auto" }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-90">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-7 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <h3 style={{ margin: "10px auto auto auto" }}>Login </h3>
                <div className="card-body p-5">
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-5">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="form-outline mb-5">
                      <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>

                    <div className="form-check d-flex justify-content-center mb-3">
                      <input
                        className="form-check-input me-3"
                        type="checkbox"
                        value=""
                      />
                      <label className="form-check-label">
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-5 text-body"
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center text-muted mt-4 mb-2">
                      Dont have a account?{" "}
                      <a href="/register" className="fw-bold text-body">
                        <u>Register here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  return (
    !isLoggedIn ? html : <Navigate to="/"/>
    
    )

  
}

export default Login;
