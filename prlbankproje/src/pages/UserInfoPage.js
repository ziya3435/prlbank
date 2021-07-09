import React from "react";

const RegisterPage = () => {
  return (
    <>
      <div className="justify-content-center row">
        <div className="col-md-8">
          <h1 id="register-title">
            <span>User settings for [admindevelop]</span>
          </h1>
        </div>
      </div>

      <div className="container-fluid row d-flex justify-content-center  ">
        <div className=" container row d-flex justify-content-center  ">
          <form className="col-md-8">
            <div className="text-secondary fw-bold form-group ">
              <div class="form-group">
                <label for="firstname" className="d-flex justify-content-start">
                  First Name
                </label>
                <input
                  name="firstname"
                  type="text"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>
              <div class="form-group">
                <label for="firstname" className="d-flex justify-content-start">
                  Last Name
                </label>
                <input
                  name="lastname"
                  type="text"
                  className="form-control"
                  placeholder="Your lastname"
                />
              </div>
              <div class="form-group">
                <label for="firstname" className="d-flex justify-content-start">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                />
              </div>
              <div class="form-group">
                <label
                  for="langKey"
                  className="d-flex justify-content-start fw-bold"
                >
                  Language
                </label>
                <select name="langKey" id="langKey" class="form-control w-100">
                  <option value="en" className="">
                    English
                  </option>
                  <option value="tr" className="">
                    Türkçe
                  </option>
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary mx-2 px-3 my-5">
              <span>Save</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
