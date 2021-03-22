import React, { useState } from "react";
import Layout from "../shared/Layout";
import { Formik } from "formik";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase";
import "../sign-up/signup.styles.scss";

const SignIn = ({ history }) => {
  const [error, setError] = useState(null);
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSignIn = async (values, { setSubmitting }) => {
    const { email, password } = values;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSubmitting(false);
      history.push("/shop");
    } catch (error) {
      console.log(error);
      setError(error);
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="sign-up">
        <h1>Sign In</h1>
        <div className="form-container">
          <Formik initialValues={initialValues} onSubmit={handleSignIn}>
            {({ values, handleChange, handleSubmit, isSubmitting }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className={"nomad-input "}
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className={"nomad-input "}
                    />
                  </div>
                  <div className="submit-btn">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="button is-black nomad-btn submit"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="error-message">
                    {error && <p>{error.message}</p>}
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(SignIn);
