import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Register() {
  const [register, setRegister] = React.useState(0);
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const user = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(user);

    if (user.name && user.email && user.password) {
      axios
        .post(
          "http://localhost:1234/api/auth/register",
          {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
          }
        )
        .then((result) => {
          console.log(result);
          if (result.status === 200) {
            setRegister(1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return <Navigate to="/login" />;
  }
  return (
    <div style={{ height: "700px", margin: "auto auto auto auto" }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-80">
          <div className="row d-flex justify-content-center align-items-center h-180">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <h3 style={{ margin: "10px auto auto auto" }}>Register User</h3>
                {register == 1 ? <Navigate to="/login" /> : null}
                <div className="card-body p-5">
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg"
                        placeholder="Name"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        name="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        name="confirmPassword"
                        className="form-control form-control-lg"
                        placeholder="confirm password"
                      />
                    </div>

                    <div className="form-check d-flex justify-content-center mb-3">
                      <input
                        className="form-check-input me-2"
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
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>

                    <p className="text-center text-muted mt-3 mb-0">
                      Have already an account?{" "}
                      <a href="/login" className="fw-bold text-body">
                        <u>Login here</u>
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
  );
}

export default Register;
