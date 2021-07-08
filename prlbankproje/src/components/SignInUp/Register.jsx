// https://colorlib.com/etc/lf/Login_v1/index.html

import React from "react";
import "./signinup.css";
import logo from "./logo-2.png";
const registerData = [
  {
    label: "SSN",
    Name: "ssn",
    placehold: "000-00-0000",
    type: "text",
    require: "required",
  },
  {
    label: "First Name",
    Name: "firstname",
    placehold: "",
    type: "text",
    require: "required",
  },
  {
    label: "Last Name",
    Name: "lastname",
    placehold: "",
    type: "text",
    require: "required",
  },
  {
    label: "Address",
    Name: "address",
    placehold: "",
    type: "text",
    require: "",
  },
  {
    label: "Mobile Phone Number",
    Name: "phone",
    placehold: "000-000-0000",
    type: "number",
    require: "",
  },
  {
    label: "Username",
    Name: "username",
    placehold: "Your username",
    type: "text",
    require: "required",
  },
  {
    label: "Email",
    Name: "email",
    placehold: "Your email",
    type: "email",
    require: "required",
  },
  {
    label: "New password",
    Name: "password",
    placehold: "New password",
    type: "password",
    require: "required",
  },
  {
    label: "New password confirmation",
    Name: "password",
    placehold: "Confirm the new password",
    type: "newpassword",
    require: "required",
  },
];
const SignUp = () => {
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center bg-warning rounded my-5">
        <img className="my-5  bg-dark w-50 rounded" src={logo} alt="" />
      </div>
      <div className="row my-2">
        <form className="col s12">
          {registerData.map((item) => {
            const { label, Name, placehold, type } = item;

            return (
              <div className="row">
                <div className="input-field col s12 py-3 ">
                  <label
                    className="labelstil d-flex justify-content-start "
                    for={type}
                  >
                    {label}
                  </label>
                  <input
                    className="validate input-sa is-touched is-pristine av-valid form-control"
                    id={Name}
                    type={type}
                    name={Name}
                    required={require}
                    placeholder={placehold}
                  />
                  <div class="invalid-feedback">Your Last Name is required</div>
                </div>
              </div>
            );
          })}
          <div className="d-flex justify-content-start" id="strength">
            <small className="row">
              <span>Password strength:</span>
            </small>
            <ul id="strengthBar" className="row my-5 mx-3">
              <li
                className="point"
                style={{ backgroundColor: "#FF0000 " }}
              ></li>
              <li
                className="point"
                style={{ backgroundColor: "#99FF00 " }}
              ></li>
              <li
                className="point"
                style={{ backgroundColor: "#99FF00 " }}
              ></li>
              <li
                className="point"
                style={{ backgroundColor: "#99FF00 " }}
              ></li>
              <li className="point" style={{ backgroundColor: "#DDDDDD" }}></li>
            </ul>
          </div>
          <button
            type="submit"
            id="register-submit"
            class="btn btn-primary d-flex justify-content-start "
          >
            <span>Register</span>
          </button>

          <div
            class="alert alert-warning fade show d-flex justify-content-start my-3"
            role="alert"
          >
            <p className="d-flex flex-start ">
              <span>
                If you want to sign in, you can try the default accounts:
              </span>
              <br />
              <span>- Administrator (login="admin" and password="admin")</span>
              <br />
              <span>- User(login="user" and password="user").</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
