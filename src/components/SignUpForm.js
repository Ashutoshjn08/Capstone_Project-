import React, { useRef } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function SignUpForm(props) {
  const { errors, touched } = props;

  function submitForm() {
    let user = {};
    user.firstname = props.values.firstname;
    user.lastname = props.values.lastname;
    user.id = props.values.id;
    user.location = props.values.location;
    user.mobile = props.values.mobile;
    user.password = props.values.password;
    props.submitFormBtn(user)
    props.history.push('/signin')
  }

  return (
    <div className="div-signin">
      <div className="card card-div-signup">
        <div style={{textAlign: "center"}} className="card-header">
          <b>Sign-up Form</b>
        </div>
        <div className="card-body">
          <Form>
            <span className = "signup-input sign-up-span">First Name: </span>
            <Field type="text" name="firstname" placeholder="First Name" /><br/>
            {touched.firstname && errors.firstname && (
              <span className="form-err">{errors.firstname}</span>
            )}
            <br />
            <span className = "signup-input sign-up-span">Last Name: </span>
            <Field type="text" name="lastname" placeholder="Last Name" /><br/>
            {touched.lastname && errors.lastname && (
              <span className="form-err">{errors.lastname}</span>
            )}
            <br />
            <span className = "signup-input sign-up-span">Email ID: </span>
            <Field type="text" name="id" placeholder="Email ID" /><br/>
            {touched.id && errors.id && (
              <span className="form-err">{errors.id}</span>
            )}
            <br />
            <span className = "signup-input sign-up-span">City: </span>
            <Field type="text" name="location" placeholder="City" /><br/>
            {touched.location && errors.location && (
              <span className="form-err">{errors.location}</span>
            )}
            <br />
            <span className = "signup-input sign-up-span">Mobile: </span>
            <Field type="text" name="mobile" placeholder="Mobile" /><br/>
            {touched.mobile && errors.mobile && (
              <span className="form-err">{errors.mobile}</span>
            )}
            <br />
            
            <span className = "signup-input sign-up-span">Password: </span>
            <Field type="password" name="password" placeholder="Password" /><br/>
            {touched.password && errors.password && (
              <span className="form-err">{errors.password}</span>
            )}
            <br />
            <button
              className="btn-add-product-sub sign-up-btn"
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
  mapPropsToValues({ fName, lName, eml, loc, mbl, pwd }) {
    return {
      firstname: fName || "",
      lastname: lName || "",
      id: eml || "",
      location: loc || "",
      mobile: mbl ||"",
      password: pwd || "",
    };
  },
  validationSchema: Yup.object().shape({
    firstname: Yup.string().required("First name is required!"),
    lastname: Yup.string().required("Last name is required!"),
    id: Yup.string().email().required("Email id is required!"),
    location: Yup.string().required("Location required!"),
    mobile: Yup.string().min(10, "Invalid number!").required("Mobile is required!"),
    password: Yup.string().min(6, "Atleast 6 letters!").required("Password is required!"),
  }),
})(SignUpForm);

export default formikForm;
