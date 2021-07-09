import React from "react";
import "./RegisterPage.css";

const RegisterPage = () => {
  return (
    <>
      <div className="justify-content-center row">
        <div className="col-md-8">
          <h1 id="register-title">
            <span>Registration</span>
          </h1>
        </div>
      </div>

      <div className="justify-content-center row">
        <div className="col-md-8">
          <form
            novalidate=""
            action="#"
            id="register-form"
            method="get"
            className="av-invalid"
          >
            <div className="form-group">
              <label for="ssn" className="d-flex justify-content-start fw-bold">
                SSN
              </label>
              <input
                name="ssn"
                placeholder="000-00-0000"
                required=""
                pattern="/^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/"
                id="ssn"
                type="text"
                className="is-untouched is-pristine av-invalid form-control"
                value=""
              />
            </div>
            <div className="text-danger form-group">
              <label
                for="firstname"
                className="d-flex justify-content-start fw-bold"
              >
                First Name
              </label>
              <input
                name="firstname"
                required=""
                id="firstname"
                type="text"
                className="is-touched is-pristine av-invalid is-invalid form-control"
                value=""
              />
              <div className="invalid-feedback d-flex justify-content-start fw-bold">
                Your First Name is required
              </div>
            </div>
            <div className="form-group">
              <label
                for="lastname"
                className="d-flex justify-content-start fw-bold"
              >
                Last Name
              </label>
              <input
                name="lastname"
                required=""
                id="lastname"
                type="text"
                className="is-untouched is-pristine av-invalid form-control"
                value=""
              />
            </div>

            <div className="form-group">
              <label
                for="address"
                className="d-flex justify-content-start fw-bold"
              >
                Address
              </label>
              <input
                name="address"
                id="address"
                type="text"
                className="is-untouched is-pristine av-valid form-control"
                value=""
              />
            </div>
            <div className="form-group">
              <label
                for="mobilephone"
                className="d-flex justify-content-start fw-bold"
              >
                Mobile Phone Number
              </label>
              <input
                name="mobilephone"
                placeholder="000-000-0000"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                id="mobilephone"
                type="text"
                className="is-untouched is-pristine av-valid form-control"
                value=""
              />
            </div>
            <div className="form-group">
              <label
                for="username"
                className="d-flex justify-content-start fw-bold"
              >
                Username
              </label>
              <input
                name="username"
                placeholder="Your username"
                required=""
                pattern="^[a-zA-Z0-9!$&amp;*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$"
                minlength="1"
                maxlength="50"
                id="username"
                type="text"
                className="is-touched is-dirty av-valid form-control"
                value="admindevelop"
              />
            </div>
            <div className="form-group">
              <label
                for="email"
                className="d-flex justify-content-start fw-bold"
              >
                Email
              </label>
              <input
                name="email"
                placeholder="Your email"
                required=""
                minlength="5"
                maxlength="254"
                id="email"
                type="email"
                className="is-untouched is-pristine av-invalid form-control"
                value=""
              />
            </div>
            <div className="form-group">
              <label
                for="firstPassword"
                className="d-flex justify-content-start fw-bold"
              >
                New password
              </label>
              <input
                name="firstPassword"
                placeholder="New password"
                required=""
                minlength="4"
                maxlength="50"
                id="firstPassword"
                type="password"
                className="is-touched is-dirty av-valid form-control"
                value="Admindevelop."
              />
            </div>
            <div id="strength">
              <small>
                <span>Password strength:</span>
              </small>
              <ul id="strengthBar w-25">
                <li
                  className="point"
                  style={{ backgroundColor: "#FF0000" }}
                ></li>
                <li
                  className="point"
                  style={{ backgroundColor: "#99FF00" }}
                ></li>
                <li
                  className="point"
                  style={{ backgroundColor: "#99FF00" }}
                ></li>
                <li
                  className="point"
                  style={{ backgroundColor: "#99FF00" }}
                ></li>
                <li
                  className="point"
                  style={{ backgroundColor: "#DDDDDD" }}
                ></li>
              </ul>
            </div>
            <div className="form-group">
              <label
                for="secondPassword"
                className="d-flex justify-content-start fw-bold"
              >
                New password confirmation
              </label>
              <input
                name="secondPassword"
                placeholder="Confirm the new password"
                required=""
                minlength="4"
                maxlength="50"
                id="secondPassword"
                type="password"
                className="is-untouched is-pristine av-invalid form-control"
                value=""
              />
            </div>
            <button
              type="submit"
              id="register-submit"
              className="btn btn-primary"
            >
              <span>Register</span>
            </button>
          </form>
          <p>&nbsp;</p>

          <div
            className="alert alert-warning fade show d-flex justify-content-center my-3 mx-3 w-75"
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
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
