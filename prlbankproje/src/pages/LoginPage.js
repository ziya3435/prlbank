import React from "react";

const RegisterPage = () => {
  return (
    <>
      <div className="justify-content-center row">
        <div className="col-md-8">
          <h1 id="register-title">
            <span>Login Page</span>
          </h1>
        </div>
      </div>

      <div className="container-fluid row d-flex justify-content-center  ">
        <div className=" container row d-flex justify-content-center  ">
          <form className="col-md-8">
            <div className="text-secondary fw-bold form-group ">
              <label for="firstname" className="d-flex justify-content-start">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Your email"
              />
              <label
                for="firstname"
                className="d-flex justify-content-start fw-bold"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Your password"
              />
              {/* <div className="invalid-feedback d-flex justify-content-start fw-bold">
                        Your First Name is required
                    </div> */}
            </div>

            <button type="submit" className="btn btn-secondary mx-2 px-3">
              <span>Cancel</span>
            </button>
            <button type="submit" className="btn btn-primary mx-2 px-3">
              <span>Login</span>
            </button>
          </form>
          <div className="col-md-8">
            <div
              className="alert alert-warning fade show d-flex justify-content-center my-3"
              role="alert"
            >
              <p>
                Did you forget your
                <span>
                  &nbsp; <b> password ?</b>
                </span>
              </p>
            </div>
          </div>

          <div className="col-md-8">
            <div
              className="alert alert-warning fade show d-flex justify-content-center my-3"
              role="alert"
            >
              <p>
                You don't have an account yet?&nbsp;
                <span>
                  <b>Register a new account</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
