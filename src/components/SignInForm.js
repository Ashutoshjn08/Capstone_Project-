import React, { useRef } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

let register = false;

function SignInForm(props) {
  const { errors, touched } = props;

  function submitForm() {
    let getUser = props.users.filter((user) => props.values.id == user.id);
    if (!getUser[0]) {
      register = true;
    } else {
      if (props.values.password == getUser[0].password) {
        localStorage.setItem("login", getUser[0].id);
        props.history.push("/products");
      } else {
        register = true;
      }
    }
  }
  return (
    <div className="div-signin">
      <div className="card">
        <div className="card-header">
          <b>Log in</b>
        </div>
        <div className="card-body">
          <Form>
            <Field type="text" name="id" placeholder="Email ID" /><br/>
            {touched.id && errors.id && (
              <span className="form-err">{errors.id}</span>
            )}
            <br />

            <Field type="password" name="password" placeholder="Password" /><br/>
            {touched.password && errors.password && (
              <span className="form-err">{errors.password}</span>
            )}
            <br />
            <span className={register ? "display-register" : "display-none"}>
              The account or password you entered was invalid. Enter the correct account/password or{" "}
              <a href="/signup">
                <span style={{ color: "red" }}>register now!</span>
              </a>
              <br />
              <br />
            </span>

            <button
              className="btn-add-product-sub"
              onClick={submitForm}
              type="submit"
              style={{
                width: "100px",
                height: "50px",
              }}
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

const formikForm = withFormik({
  mapPropsToValues({ eml, pwd }) {
    return {
      id: eml || "",
      password: pwd || "",
    };
  },
  validationSchema: Yup.object().shape({
    id: Yup.string()
      .email("Please enter valid email!")
      .required("Email ID is required"),
    password: Yup.string().required("Password is required"),
  }),
})(SignInForm);

export default formikForm;
